const express = require('express');
const router = express.Router();
const CosmosHubController = require('../../controllers/CryptoControllers/CosmosHubController');

router.get('/', CosmosHubController.getCOSMOSHUB);

router.post('/update', CosmosHubController.updateCOSMOSHUBData);

module.exports = router;
