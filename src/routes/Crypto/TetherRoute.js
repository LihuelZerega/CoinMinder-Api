const express = require('express');
const router = express.Router();
const TetherController = require('../../controllers/CryptoControllers/TetherController');

router.get('/', TetherController.getTETHER);

module.exports = router;