const { LEOTOKENcrypto } = require('../../db');
const { updateLeotokenData } = require('../../services/CryptosUpdateDatas/updateLEOTOKENData');

exports.getLEOTOKEN = async (req, res) => {
    try {
        await updateLeotokenData();

        let leotokenData = await LEOTOKENcrypto.findOne();

        res.json(leotokenData);
    } catch (error) {
        console.error('Error al obtener la cotización de LEOTOKEN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de LEOTOKEN' });
    }
};
