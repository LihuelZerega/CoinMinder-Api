const express = require('express');
const router = express.Router();
const WrappedBitcoinController = require('../../controllers/CryptoControllers/WrappedBitcoinController');

router.get('/', WrappedBitcoinController.getWRAPPEDBITCOIN);

module.exports = router;