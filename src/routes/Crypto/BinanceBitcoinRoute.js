const express = require('express');
const router = express.Router();
const BinanceBitcoinController = require('../../controllers/CryptoControllers/BinanceBitcoinController');

router.get('/', BinanceBitcoinController.getBINANCEBITCOIN);

router.post('/update', BinanceBitcoinController.updateBINANCEBITCOINData);

module.exports = router;
