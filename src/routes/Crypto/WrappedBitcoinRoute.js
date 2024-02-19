const express = require('express');
const router = express.Router();
const WrappedBitcoinController = require('../../controllers/CryptoControllers/WrappedBitcoinController');

router.get('/', WrappedBitcoinController.getWRAPPEDBITCOIN);

// router.post('/update', WrappedBitcoinController.updateWRAPPEDBITCOINData);

module.exports = router;
