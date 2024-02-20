const { TOINCOINcrypto } = require('../../db');
const { updateToincoinData } = require('../../services/CryptosUpdateDatas/updateTOINCOINData');

exports.getTOINCOIN = async (req, res) => {
    try {
        await updateToincoinData();

        let toincoinData = await TOINCOINcrypto.findOne();

        res.json(toincoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de TOINCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de TOINCOIN' });
    }
};
