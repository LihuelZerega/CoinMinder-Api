const express = require('express');
const router = express.Router();
const bacController = require('../../controllers/bacController');

router.get('/quote', bacController.getBAC);

router.post('/update', bacController.updateBACData);

module.exports = router;
