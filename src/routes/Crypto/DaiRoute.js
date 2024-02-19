const express = require('express');
const router = express.Router();
const DaiController = require('../../controllers/CryptoControllers/DaiController');

router.get('/', DaiController.getDAI);

// router.post('/update', DaiController.updateDAIData);

module.exports = router;
