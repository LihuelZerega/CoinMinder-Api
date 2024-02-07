const express = require('express');
const router = express.Router();
const nvdaController = require('../../controllers/StockControllers/nvdaController');

router.get('/quote', nvdaController.getNVDA);

router.post('/update', nvdaController.updateNVDAData);

module.exports = router;
