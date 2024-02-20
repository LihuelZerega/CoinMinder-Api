const express = require('express');
const router = express.Router();
const BinanceBitcoinController = require('../../controllers/CryptoControllers/BinanceBitcoinController');

router.get('/', BinanceBitcoinController.getBINANCEBITCOIN);

module.exports = router;