const express = require('express');
const router = express.Router();
const aapController = require('../../controllers/StockControllers/aapController');

router.get('/quote', aapController.getAAP);

router.post('/update', aapController.updateAAPData);

module.exports = router;
