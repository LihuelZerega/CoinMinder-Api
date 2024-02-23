const express = require('express');
const router = express.Router();
const CryptoController = require('../../controllers/CryptoControllers/CryptoCurrencyController');

router.get('/', CryptoController.getCryptocurrencies);
router.get('/quote/:id', CryptoController.getCurrencyById);
router.post('/', CryptoController.updateCryptocurrencies)

router.get('/topgainers', CryptoController.getTopGainers);
router.get('/toplosers', CryptoController.getTopLosers);


module.exports = router;