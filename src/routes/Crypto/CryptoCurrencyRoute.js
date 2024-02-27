const express = require('express');
const router = express.Router();
const CryptoController = require('../../controllers/CryptoControllers/CryptoCurrencyController');
const cron = require('node-cron');
const axios = require('axios');

cron.schedule('*/30 * * * *', async () => {
    try {
      await axios.post('http://localhost:8080/api/crypto/');
      console.log('POST request successful');
    } catch (error) {
      console.error('Error making POST request:', error.message);
    }
  });

router.get('/', CryptoController.getCryptocurrencies);
router.get('/quote/:id', CryptoController.getCurrencyById);
router.post('/', CryptoController.updateCryptocurrencies)

router.get('/topgainers', CryptoController.getTopGainers);
router.get('/toplosers', CryptoController.getTopLosers);


module.exports = router;