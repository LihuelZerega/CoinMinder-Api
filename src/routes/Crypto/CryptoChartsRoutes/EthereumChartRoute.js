const express = require('express');
const router = express.Router();
const EthereumChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/EthereumChartController');

router.get('/chart', EthereumChartController.getEthereumChartData);
router.post('/chart/update', EthereumChartController.updateEthereumChart);

module.exports = router;