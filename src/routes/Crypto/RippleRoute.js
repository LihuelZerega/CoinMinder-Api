const express = require('express');
const router = express.Router();
const RippleController = require('../../controllers/CryptoControllers/RippleController');

router.get('/', RippleController.getRIPPLE);

// router.post('/update', RippleController.updateRIPPLEData);

module.exports = router;
