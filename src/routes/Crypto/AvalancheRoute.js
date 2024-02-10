const express = require('express');
const router = express.Router();
const AvalancheController = require('../../controllers/CryptoControllers/AvalancheController');

router.get('/', AvalancheController.getAVALANCHE);

router.post('/update', AvalancheController.updateAVALANCHEData);

module.exports = router;
