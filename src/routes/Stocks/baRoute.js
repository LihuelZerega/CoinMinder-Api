const express = require('express');
const router = express.Router();
const baController = require('../../controllers/baController');

router.get('/quote', baController.getBA);

router.post('/update', baController.updateBAData);

module.exports = router;
