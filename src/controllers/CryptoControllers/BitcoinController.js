const { BITCOINcrypto } = require('../../db');
const { updateBitcoinData } = require('../../services/CryptosUpdateDatas/bitcoinUpdater');

exports.getBITCOIN = async (req, res) => {
    try {
        await updateBitcoinData();

        let bitcoinData = await BITCOINcrypto.findOne();

        res.json(bitcoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de BITCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de BITCOIN' });
    }
};
