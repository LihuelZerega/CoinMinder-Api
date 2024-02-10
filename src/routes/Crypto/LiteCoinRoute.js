const express = require('express');
const router = express.Router();
const LiteCoinController = require('../../controllers/CryptoControllers/LiteCoinController');

router.get('/', LiteCoinController.getLITECOIN);

router.post('/update', LiteCoinController.updateLITECOINData);

module.exports = router;
