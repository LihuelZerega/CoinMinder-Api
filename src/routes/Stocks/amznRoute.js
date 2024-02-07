const express = require('express');
const router = express.Router();
const amznController = require('../../controllers/StockControllers/amznController');

router.get('/quote', amznController.getAMZN);

router.post('/update', amznController.updateAMZNData);

module.exports = router;
