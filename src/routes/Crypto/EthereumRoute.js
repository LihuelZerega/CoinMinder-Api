const express = require('express');
const router = express.Router();
const EthereumController = require('../../controllers/CryptoControllers/EthereumController');

router.get('/', EthereumController.getETHEREUM);

router.post('/update', EthereumController.updateETHEREUMData);

module.exports = router;
