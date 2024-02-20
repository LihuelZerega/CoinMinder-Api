const express = require('express');
const router = express.Router();
const UniSwapController = require('../../controllers/CryptoControllers/UniSwapController');

router.get('/', UniSwapController.getUNISWAP);

module.exports = router;