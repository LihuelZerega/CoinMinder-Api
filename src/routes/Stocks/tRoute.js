const express = require('express');
const router = express.Router();
const tController = require('../../controllers/StockControllers/tController');

router.get('/quote', tController.getT);

router.post('/update', tController.updateTData);

module.exports = router;
