const express = require('express');
const router = express.Router();
const PolkadotController = require('../../controllers/CryptoControllers/PolkadotController');

router.get('/', PolkadotController.getPOLKADOT);

// router.post('/update', PolkadotController.updatePOLKADOTData);

module.exports = router;
