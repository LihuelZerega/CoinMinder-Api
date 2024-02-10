const express = require('express');
const router = express.Router();
const BitcoinController = require('../../controllers/CryptoControllers/BitcoinController');

router.get('/', BitcoinController.getBITCOIN);

router.post('/update', BitcoinController.updateBITCOINData);

module.exports = router;
