const express = require('express');
const router = express.Router();
const koController = require('../../controllers/koController');

router.get('/quote', koController.getKO);

router.post('/update', koController.updateKOData);

module.exports = router;
