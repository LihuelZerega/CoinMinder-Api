const express = require('express');
const router = express.Router();
const pepController = require('../../controllers/StockControllers/pepController');

router.get('/quote', pepController.getPEP);

router.post('/update', pepController.updatePEPData);

module.exports = router;
