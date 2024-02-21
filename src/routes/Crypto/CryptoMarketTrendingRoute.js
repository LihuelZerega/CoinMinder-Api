const express = require('express');
const router = express.Router();
const CryptoMarketTrendingDataController = require('../../controllers/CryptoControllers/CryptoMarketTrendingController');

router.get('/', async (req, res) => {
    try {
        await CryptoMarketTrendingDataController.getCryptoMarketTrendingData(req, res);
    } catch (error) {
        console.error('Error en la ruta de CryptoMarketTrendingData:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/update', async (req, res) => {
    try {
        await CryptoMarketTrendingDataController.updateCryptoMarketTrendingData(req, res);
    } catch (error) {
        console.error('Error en la ruta de CryptoMarketTrendingData:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;