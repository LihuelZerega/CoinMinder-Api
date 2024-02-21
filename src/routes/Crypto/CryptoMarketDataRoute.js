const express = require('express');
const router = express.Router();
const CryptoMarketDataController = require('../../controllers/CryptoControllers/CryptoMarketDataController');

router.get('/', async (req, res) => {
    try {
        await CryptoMarketDataController.getCryptoMarketData(req, res);
    } catch (error) {
        console.error('Error en la ruta de CryptoMarketData:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

router.post('/update', async (req, res) => {
    try {
        await CryptoMarketDataController.updateCryptoMarketData(req, res);
    } catch (error) {
        console.error('Error en la ruta de CryptoMarketData:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;