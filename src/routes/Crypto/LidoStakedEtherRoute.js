const express = require('express');
const router = express.Router();
const LidoStakedEtherController = require('../../controllers/CryptoControllers/LidoStakedEtherController');

router.get('/', LidoStakedEtherController.getLIDOSTAKED);

router.post('/update', LidoStakedEtherController.updateLIDOSTAKEDData);

module.exports = router;
