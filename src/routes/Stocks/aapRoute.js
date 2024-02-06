const express = require('express');
const router = express.Router();
const aapController = require('../../controllers/aapController.js');

router.get('/quote', aapController.getAAP);

module.exports = router;
