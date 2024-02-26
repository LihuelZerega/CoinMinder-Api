const axios = require('axios');
const { CryptoEthereumChart } = require('../../../db');

async function updateEthereumChart(req, res) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?', {
            params: {
                vs_currency: 'usd',
                days: 'max',
            },
        });

        const ethereumChartData = response.data.prices.map(priceData => ({
            timestamp: priceData[0],
            price: priceData[1],
        }));

        await CryptoEthereumChart.destroy({ truncate: true });
        await CryptoEthereumChart.bulkCreate(ethereumChartData);

        res.status(200).json({ message: 'Datos de Ethereum actualizados correctamente.' });
    } catch (error) {
        console.error('Error al obtener los datos de Ethereum:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getEthereumChartData(req, res) {
    try {
        const ethereumChartData = await CryptoEthereumChart.findAll();
        res.status(200).json(ethereumChartData);
    } catch (error) {
        console.error('Error al obtener los datos de Ethereum:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { updateEthereumChart, getEthereumChartData };
