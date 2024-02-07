const express = require('express');
const router = express.Router();
const amzController = require('../../controllers/StockControllers/amzController');

router.get('/quote', amzController.getAMZ);

router.post('/update', amzController.updateAMZData);

module.exports = router;
