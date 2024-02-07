const express = require('express');
const router = express.Router();
const cscoController = require('../../controllers/StockControllers/cscoController');

router.get('/quote', cscoController.getCSCO);

router.post('/update', cscoController.updateCSCOData);

module.exports = router;
