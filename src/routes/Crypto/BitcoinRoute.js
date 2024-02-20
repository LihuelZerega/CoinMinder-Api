const express = require('express');
const router = express.Router();
const BitcoinController = require('../../controllers/CryptoControllers/BitcoinController');

router.get('/', BitcoinController.getBITCOIN);

module.exports = router;