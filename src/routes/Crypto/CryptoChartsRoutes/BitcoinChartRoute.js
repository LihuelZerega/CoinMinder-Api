const express = require('express');
const router = express.Router();
const bitcoinChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/BitcoinChartController');

router.get('/chart', bitcoinChartController.getBitcoinChartData);
router.post('/chart/update', bitcoinChartController.updateBitcoinChart);

module.exports = router;