const express = require('express');
const router = express.Router();
const CryptoMarketTrendingDataController = require('../../controllers/CryptoControllers/CryptoMarketTrendingController');
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/30 * * * *', async () => {
    try {
      await axios.post('http://localhost:8080/api/crypto/market/trending/update');
      console.log('POST request successful');
    } catch (error) {
      console.error('Error making POST request:', error.message);
    }
  });

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