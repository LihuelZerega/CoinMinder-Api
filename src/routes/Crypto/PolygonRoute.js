const express = require('express');
const router = express.Router();
const PolygonController = require('../../controllers/CryptoControllers/PolygonController');

router.get('/', PolygonController.getPOLYGON);

router.post('/update', PolygonController.updatePOLYGONData);

module.exports = router;
