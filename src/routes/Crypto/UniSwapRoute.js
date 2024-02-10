const express = require('express');
const router = express.Router();
const UniSwapController = require('../../controllers/CryptoControllers/UniSwapController');

router.get('/', UniSwapController.getUNISWAP);

router.post('/update', UniSwapController.updateUNISWAPData);

module.exports = router;
