const express = require('express');
const router = express.Router();
const gsController = require('../../controllers/StockControllers/gsController');

router.get('/quote', gsController.getGS);

router.post('/update', gsController.updateGSData);

module.exports = router;
