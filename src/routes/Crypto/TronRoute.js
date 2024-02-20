const express = require('express');
const router = express.Router();
const TronController = require('../../controllers/CryptoControllers/TronController');

router.get('/', TronController.getTRON);

module.exports = router;