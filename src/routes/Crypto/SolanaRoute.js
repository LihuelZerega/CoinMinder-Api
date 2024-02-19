const express = require('express');
const router = express.Router();
const SolanaController = require('../../controllers/CryptoControllers/SolanaController');

router.get('/', SolanaController.getSOLANA);

// router.post('/update', SolanaController.updateSOLANAData);

module.exports = router;
