const express = require('express');
const router = express.Router();
const BitcoinCashController = require('../../controllers/CryptoControllers/BitcoinCashController');

router.get('/', BitcoinCashController.getBITCOINCASH);

module.exports = router;
