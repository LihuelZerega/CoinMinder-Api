const { DOGECOINcrypto } = require('../../db');
const { updateDogecoinData } = require('../../services/CryptosUpdateDatas/updateDOGECOINData');

exports.getDOGECOIN = async (req, res) => {
    try {
        await updateDogecoinData();

        let dogecoinData = await DOGECOINcrypto.findOne();

        res.json(dogecoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de DOGECOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de DOGECOIN' });
    }
};
