const { TRONcrypto } = require('../../db');
const { updateTronData } = require('../../services/CryptosUpdateDatas/updateTRONData');

exports.getTRON = async (req, res) => {
    try {
        await updateTronData();

        let tronData = await TRONcrypto.findOne();

        res.json(tronData);
    } catch (error) {
        console.error('Error al obtener la cotización de TRON:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de TRON' });
    }
};
