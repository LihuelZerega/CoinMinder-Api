const express = require('express');
const router = express.Router();
const bitcoinChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/BitcoinChartController');
const cron = require('node-cron');

cron.schedule('30 */6 * * *', async () => {
    try {
        await updateBitcoinChart();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/chart', bitcoinChartController.getBitcoinChartData);
router.post('/chart/update', bitcoinChartController.updateBitcoinChart);

module.exports = router;