const express = require('express');
const router = express.Router();
const SolanaChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/SolanaChartController');

router.get('/chart', SolanaChartController.getSolanaChartData);
router.post('/chart/update', SolanaChartController.updateSolanaChart);

module.exports = router;