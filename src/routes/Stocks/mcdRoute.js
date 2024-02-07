const express = require('express');
const router = express.Router();
const mcdController = require('../../controllers/mcdController');

router.get('/quote', mcdController.getMCD);

router.post('/update', mcdController.updateMCDData);

module.exports = router;
