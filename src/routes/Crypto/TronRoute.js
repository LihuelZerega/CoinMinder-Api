const express = require('express');
const router = express.Router();
const TronController = require('../../controllers/CryptoControllers/TronController');

router.get('/', TronController.getTRON);

// router.post('/update', TronController.updateTRONData);

module.exports = router;
