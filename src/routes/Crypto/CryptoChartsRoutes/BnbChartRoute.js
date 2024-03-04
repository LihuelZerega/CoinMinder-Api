const express = require('express');
const router = express.Router();
const BnbChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/BnbChartController');

cron.schedule('30 */6 * * *', async () => {
    try {
        await updateBnbChart();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/chart', BnbChartController.getBnbChartData);
router.post('/chart/update', BnbChartController.updateBnbChart);

module.exports = router;