const express = require('express');
const router = express.Router();
const ShibaInuController = require('../../controllers/CryptoControllers/ShibaInuController');

router.get('/', ShibaInuController.getSHIBAINU);

router.post('/update', ShibaInuController.updateSHIBAINUData);

module.exports = router;
