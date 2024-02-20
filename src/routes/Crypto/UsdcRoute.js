const express = require('express');
const router = express.Router();
const UsdcController = require('../../controllers/CryptoControllers/UsdcController');

router.get('/', UsdcController.getUSDC);

module.exports = router;