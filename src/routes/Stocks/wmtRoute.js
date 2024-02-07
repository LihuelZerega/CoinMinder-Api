const express = require('express');
const router = express.Router();
const wmtController = require('../../controllers/wmtController');

router.get('/quote', wmtController.getWMT);

router.post('/update', wmtController.updateWMTData);

module.exports = router;
