const express = require('express');
const router = express.Router();
const ChainLinkController = require('../../controllers/CryptoControllers/ChainLinkController');

router.get('/', ChainLinkController.getCHAINLINK);

module.exports = router;