const express = require('express');
const router = express.Router();
const CryptoController = require('../../controllers/CryptoControllers/CryptoController');

router.get('/', CryptoController.getCRYPTO);

module.exports = router;