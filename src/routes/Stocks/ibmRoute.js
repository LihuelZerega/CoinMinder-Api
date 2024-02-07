const express = require('express');
const router = express.Router();
const ibmController = require('../../controllers/StockControllers/ibmController');

router.get('/quote', ibmController.getIBM);

router.post('/update', ibmController.updateIBMData);

module.exports = router;
