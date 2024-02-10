const express = require('express');
const router = express.Router();
const BitcoinCashController = require('../../controllers/CryptoControllers/BitcoinCashController');

router.get('/', BitcoinCashController.getBITCOINCASH);

router.post('/update', BitcoinCashController.updateBITCOINCASHData);

module.exports = router;
