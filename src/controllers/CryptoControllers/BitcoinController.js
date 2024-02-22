const { BITCOINcrypto } = require('../../db');

exports.getBITCOIN = async (req, res) => {
    try {
        let bitcoinData = await BITCOINcrypto.findOne();

        res.json(bitcoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de BITCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de BITCOIN' });
    }
};