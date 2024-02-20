const express = require('express');
const router = express.Router();
const AvalancheController = require('../../controllers/CryptoControllers/AvalancheController');

router.get('/', AvalancheController.getAVALANCHE);

module.exports = router;