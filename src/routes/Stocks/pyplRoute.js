const express = require('express');
const router = express.Router();
const aaplController = require('../../controllers/StockControllers/aaplController');

router.get('/quote', aaplController.getAAPL);

router.post('/update', aaplController.updateAAPLData);

module.exports = router;
