const express = require('express');
const router = express.Router();
const aapController = require('../../controllers/aapController');

router.get('/quote', aapController.getAAP);

router.post('/update', aapController.updateAAPData);

module.exports = router;
