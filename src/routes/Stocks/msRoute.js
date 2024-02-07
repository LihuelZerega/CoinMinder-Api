const express = require('express');
const router = express.Router();
const msController = require('../../controllers/StockControllers/msController');

router.get('/quote', msController.getMS);

router.post('/update', msController.updateMSData);

module.exports = router;
