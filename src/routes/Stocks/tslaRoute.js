const express = require('express');
const router = express.Router();
const tslaController = require('../../controllers/tslaController');

router.get('/quote', tslaController.getTSLA);

router.post('/update', tslaController.updateTSLAData);

module.exports = router;
