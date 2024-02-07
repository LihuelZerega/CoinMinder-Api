const express = require('express');
const router = express.Router();
const googlController = require('../../controllers/StockControllers/googlController');

router.get('/quote', googlController.getGOOGL);

router.post('/update', googlController.updateGOOGLData);

module.exports = router;
