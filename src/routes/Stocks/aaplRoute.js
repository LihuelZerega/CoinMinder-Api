const express = require('express');
const router = express.Router();
const aaplController = require('../controllers/aaplController');
const updateAAPLData = require('../middleware/updateDataMiddleware');

router.get('/', updateAAPLData, aaplController.getAAPL);

module.exports = router;
