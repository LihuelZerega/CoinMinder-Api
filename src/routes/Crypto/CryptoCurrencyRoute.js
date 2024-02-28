const express = require('express');
const router = express.Router();
const CryptoController = require('../../controllers/CryptoControllers/CryptoCurrencyController');
const { deleteCryptocurrencies, updateCryptocurrencies } = require('../../controllers/CryptoControllers/CryptoCurrencyController');
const cron = require('node-cron');

cron.schedule('*/12 * * * *', async () => {
    try {
        await deleteCryptocurrencies();
        await updateCryptocurrencies();
        console.log('Proceso de actualización de criptomonedas completado');
    } catch (error) {
        console.error('Error durante el proceso de actualización de criptomonedas:', error);
    }
});

router.get('/', CryptoController.getCryptocurrencies);
router.get('/quote/:id', CryptoController.getCurrencyById);
router.post('/', CryptoController.updateCryptocurrencies);
router.get('/topgainers', CryptoController.getTopGainers);
router.get('/toplosers', CryptoController.getTopLosers);

module.exports = router;