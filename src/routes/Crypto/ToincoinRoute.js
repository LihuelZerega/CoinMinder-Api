const express = require('express');
const router = express.Router();
const ToincoinController = require('../../controllers/CryptoControllers/ToincoinController');

router.get('/', ToincoinController.getTOINCOIN);

module.exports = router;