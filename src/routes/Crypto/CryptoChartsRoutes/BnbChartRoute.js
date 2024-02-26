const express = require('express');
const router = express.Router();
const BnbChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/BnbChartController');

router.get('/chart', BnbChartController.getBnbChartData);
router.post('/chart/update', BnbChartController.updateBnbChart);

module.exports = router;