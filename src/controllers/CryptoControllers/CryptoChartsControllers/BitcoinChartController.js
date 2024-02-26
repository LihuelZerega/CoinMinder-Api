const axios = require('axios');
const { CryptoBitcoinChart } = require('../../../db');

async function updateBitcoinChart(req, res) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?', {
            params: {
                vs_currency: 'usd',
                days: 'max',
            },
        });

        const bitcoinChartData = response.data.prices.map(priceData => ({
            timestamp: priceData[0],
            price: priceData[1],
        }));

        await CryptoBitcoinChart.destroy({ truncate: true });
        await CryptoBitcoinChart.bulkCreate(bitcoinChartData);

        res.status(200).json({ message: 'Datos de Bitcoin actualizados correctamente.' });
    } catch (error) {
        console.error('Error al obtener los datos de Bitcoin:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getBitcoinChartData(req, res) {
    try {
        const bitcoinChartData = await CryptoBitcoinChart.findAll();
        res.status(200).json(bitcoinChartData);
    } catch (error) {
        console.error('Error al obtener los datos de Bitcoin:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { updateBitcoinChart, getBitcoinChartData };
