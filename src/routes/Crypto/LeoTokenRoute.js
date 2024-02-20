const express = require('express');
const router = express.Router();
const LeoTokenController = require('../../controllers/CryptoControllers/LeoTokenController');

router.get('/', LeoTokenController.getLEOTOKEN);

module.exports = router;