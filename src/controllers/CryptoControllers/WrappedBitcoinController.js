const { WRAPPEDBITCOINcrypto } = require('../../db');

exports.getWRAPPEDBITCOIN = async (req, res) => {
    try {
        let wreappedbitcoinData = await WRAPPEDBITCOINcrypto.findOne();

        res.json(wreappedbitcoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de WRAPPEDBITCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de WRAPPEDBITCOIN' });
    }
};
