const express = require('express');
const router = express.Router();
const TetherChartController = require('../../../controllers/CryptoControllers/CryptoChartsControllers/TetherChartController');

cron.schedule('30 */6 * * *', async () => {
    try {
        await updateTetherChart();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/chart', TetherChartController.getTetherChartData);
router.post('/chart/update', TetherChartController.updateTetherChart);

module.exports = router;