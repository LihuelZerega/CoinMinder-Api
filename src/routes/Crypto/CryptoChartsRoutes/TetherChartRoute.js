const express = require('express');
const router = express.Router();
const TetherChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/TetherChartController');

router.get('/chart', TetherChartController.getTetherChartData);
router.post('/chart/update', TetherChartController.updateTetherChart);

module.exports = router;