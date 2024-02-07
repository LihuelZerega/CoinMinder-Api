const express = require('express');
const router = express.Router();
const nflxController = require('../../controllers/nflxController');

router.get('/quote', nflxController.getNFLX);

router.post('/update', nflxController.updateNFLXData);

module.exports = router;
