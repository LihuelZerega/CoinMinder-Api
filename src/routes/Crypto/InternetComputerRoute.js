const express = require('express');
const router = express.Router();
const InternetComputerController = require('../../controllers/CryptoControllers/InternetComputerController');

router.get('/', InternetComputerController.getINTERNETCOMPUTER);

module.exports = router;