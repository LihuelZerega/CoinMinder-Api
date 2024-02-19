const express = require('express');
const router = express.Router();
const InternetComputerController = require('../../controllers/CryptoControllers/InternetComputerController');

router.get('/', InternetComputerController.getINTERNETCOMPUTER);

// router.post('/update', InternetComputerController.updateINTERNETCOMPUTERData);

module.exports = router;
