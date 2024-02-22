const { BINANCEBITCOINcrypto } = require('../../db');

exports.getBINANCEBITCOIN = async (req, res) => {
    try {

        let binancebitcoinData = await BINANCEBITCOINcrypto.findOne();

        res.json(binancebitcoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de BINANCEBITCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de BINANCEBITCOIN' });
    }
};
