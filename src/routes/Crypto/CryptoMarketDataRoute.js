const express = require('express');
const router = express.Router();
const CryptoMarketDataController = require('../../controllers/CryptoControllers/CryptoMarketDataController');
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/12 * * * *', async () => {
    try {
      await axios.post('http://localhost:8080/api/crypto/market/update');
      console.log('POST request successful');
    } catch (error) {
      console.error('Error making POST request:', error.message);
    }
  });

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