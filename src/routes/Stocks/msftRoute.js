const express = require('express');
const router = express.Router();
const msftController = require('../../controllers/StockControllers/msftController');

router.get('/quote', msftController.getMSFT);

router.post('/update', msftController.updateMSFTData);

module.exports = router;
