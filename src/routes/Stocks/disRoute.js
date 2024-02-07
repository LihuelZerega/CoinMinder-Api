const express = require('express');
const router = express.Router();
const disController = require('../../controllers/StockControllers/disController');

router.get('/quote', disController.getDIS);

router.post('/update', disController.updateDISData);

module.exports = router;
