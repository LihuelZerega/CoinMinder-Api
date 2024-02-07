const express = require('express');
const router = express.Router();
const geController = require('../../controllers/geController');

router.get('/quote', geController.getGE);

router.post('/update', geController.updateGEData);

module.exports = router;
