const express = require('express');
const router = express.Router();
const EthereumChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/EthereumChartController');
const cron = require('node-cron');

cron.schedule('30 */6 * * *', async () => {
    try {
        await updateEthereumChart();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/chart', EthereumChartController.getEthereumChartData);
router.post('/chart/update', EthereumChartController.updateEthereumChart);

module.exports = router;