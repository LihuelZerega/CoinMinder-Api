const express = require('express');
const router = express.Router();
const disController = require('../../controllers/disController');

router.get('/quote', disController.getDIS);

router.post('/update', disController.updateDISData);

module.exports = router;
