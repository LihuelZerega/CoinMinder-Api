const express = require('express');
const router = express.Router();
const SolanaChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/SolanaChartController');

cron.schedule('30 */6 * * *', async () => {
    try {
        await updateSolanaChart();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/chart', SolanaChartController.getSolanaChartData);
router.post('/chart/update', SolanaChartController.updateSolanaChart);

module.exports = router;