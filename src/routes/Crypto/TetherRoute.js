const express = require('express');
const router = express.Router();
const TetherController = require('../../controllers/CryptoControllers/TetherController');

router.get('/', TetherController.getTETHER);

router.post('/update', TetherController.updateTETHERData);

module.exports = router;
