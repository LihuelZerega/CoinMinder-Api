const axios = require('axios');
const { CryptoBnbChart } = require('../../../db');

async function updateBnbChart(req, res) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/binance-bitcoin/market_chart?', {
            params: {
                vs_currency: 'usd',
                days: 'max',
            },
        });

        const bnbChartData = response.data.prices.map(priceData => ({
            timestamp: priceData[0],
            price: priceData[1],
        }));

        await CryptoBnbChart.destroy({ truncate: true });
        await CryptoBnbChart.bulkCreate(bnbChartData);

        res.status(200).json({ message: 'Datos de Bnb actualizados correctamente.' });
    } catch (error) {
        console.error('Error al obtener los datos de Bnb:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getBnbChartData(req, res) {
    try {
        const bnbChartData = await CryptoBnbChart.findAll();
        res.status(200).json(bnbChartData);
    } catch (error) {
        console.error('Error al obtener los datos de Bnb:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { updateBnbChart, getBnbChartData };