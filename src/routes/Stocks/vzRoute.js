const express = require('express');
const router = express.Router();
const vzController = require('../../controllers/StockControllers/vzController');

router.get('/quote', vzController.getVZ);

router.post('/update', vzController.updateVZData);

module.exports = router;
