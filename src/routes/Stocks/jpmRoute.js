const express = require('express');
const router = express.Router();
const jpmController = require('../../controllers/jpmController');

router.get('/quote', jpmController.getJPM);

router.post('/update', jpmController.updateJPMData);

module.exports = router;
