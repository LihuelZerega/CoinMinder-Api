const express = require('express');
const router = express.Router();
const intcController = require('../../controllers/StockControllers/intcController');

router.get('/quote', intcController.getINTC);

router.post('/update', intcController.updateINTCData);

module.exports = router;
