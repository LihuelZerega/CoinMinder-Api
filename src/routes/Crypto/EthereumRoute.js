const express = require('express');
const router = express.Router();
const EthereumController = require('../../controllers/CryptoControllers/EthereumController');

router.get('/', EthereumController.getETHEREUM);

module.exports = router;