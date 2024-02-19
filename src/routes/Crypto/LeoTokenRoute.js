const express = require('express');
const router = express.Router();
const LeoTokenController = require('../../controllers/CryptoControllers/LeoTokenController');

router.get('/', LeoTokenController.getLEOTOKEN);

// router.post('/update', LeoTokenController.updateLEOTOKENData);

module.exports = router;
