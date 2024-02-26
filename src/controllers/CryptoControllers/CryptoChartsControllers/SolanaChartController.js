const axios = require('axios');
const { CryptoSolanaChart } = require('../../../db');

async function updateSolanaChart(req, res) {
    try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/solana/market_chart?', {
            params: {
                vs_currency: 'usd',
                days: 'max',
            },
        });

        const solanaChartData = response.data.prices.map(priceData => ({
            timestamp: priceData[0],
            price: priceData[1],
        }));

        await CryptoSolanaChart.destroy({ truncate: true });
        await CryptoSolanaChart.bulkCreate(solanaChartData);

        res.status(200).json({ message: 'Datos de Solana actualizados correctamente.' });
    } catch (error) {
        console.error('Error al obtener los datos de Solana:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getSolanaChartData(req, res) {
    try {
        const solanaChartData = await CryptoSolanaChart.findAll();
        res.status(200).json(solanaChartData);
    } catch (error) {
        console.error('Error al obtener los datos de Solana:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { updateSolanaChart, getSolanaChartData };
