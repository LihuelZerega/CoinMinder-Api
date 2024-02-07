const express = require('express');
const router = express.Router();
const amdController = require('../../controllers/amdController');

router.get('/quote', amdController.getAMD);

router.post('/update', amdController.updateAMDData);

module.exports = router;
