const express = require('express');
const router = express.Router();
const PolygonController = require('../../controllers/CryptoControllers/PolygonController');

router.get('/', PolygonController.getPOLYGON);

module.exports = router;