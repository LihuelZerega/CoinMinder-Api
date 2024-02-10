const express = require('express');
const router = express.Router();
const ChainLinkController = require('../../controllers/CryptoControllers/ChainLinkController');

router.get('/', ChainLinkController.getCHAINLINK);

router.post('/update', ChainLinkController.updateCHAINLINKData);

module.exports = router;
