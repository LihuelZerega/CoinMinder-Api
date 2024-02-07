const express = require('express');
const router = express.Router();
const fbController = require('../../controllers/fbController');

router.get('/quote', fbController.getFB);

router.post('/update', fbController.updateFBData);

module.exports = router;
