const express = require('express');
const router = express.Router();
const ToincoinController = require('../../controllers/CryptoControllers/ToincoinController');

router.get('/', ToincoinController.getTOINCOIN);

router.post('/update', ToincoinController.updateTOINCOINData);

module.exports = router;
