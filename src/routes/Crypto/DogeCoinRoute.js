const express = require('express');
const router = express.Router();
const DogeCoinController = require('../../controllers/CryptoControllers/DogeCoinController');

router.get('/', DogeCoinController.getDOGECOIN);

module.exports = router;