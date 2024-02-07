const express = require('express');
const router = express.Router();
const googlController = require('../../controllers/googlController');

router.get('/quote', googlController.getGOOGL);

router.post('/update', googlController.updateGOOGLData);

module.exports = router;
