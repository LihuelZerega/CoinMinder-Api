const axios = require('axios');
const { CryptoTetherChart } = require('../../../db');

async function updateTetherChart(req, res) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/tether/market_chart?', {
            params: {
                vs_currency: 'usd',
                days: 'max',
            },
        });

        const tetherChartData = response.data.prices.map(priceData => ({
            timestamp: priceData[0],
            price: priceData[1],
        }));

        await CryptoTetherChart.destroy({ truncate: true });
        await CryptoTetherChart.bulkCreate(tetherChartData);

        res.status(200).json({ message: 'Datos de Tether actualizados correctamente.' });
    } catch (error) {
        console.error('Error al obtener los datos de Tether:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getTetherChartData(req, res) {
    try {
        const tetherChartData = await CryptoTetherChart.findAll();
        res.status(200).json(tetherChartData);
    } catch (error) {
        console.error('Error al obtener los datos de Tether:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { updateTetherChart, getTetherChartData };
