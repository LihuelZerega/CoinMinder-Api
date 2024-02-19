const express = require('express');
const router = express.Router();
const CardanoController = require('../../controllers/CryptoControllers/CardanoController');

router.get('/', CardanoController.getCARDANO);

// router.post('/update', CardanoController.updateCARDANOData);

module.exports = router;
