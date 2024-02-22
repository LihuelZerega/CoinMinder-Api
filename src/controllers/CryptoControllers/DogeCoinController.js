const { DOGECOINcrypto } = require('../../db');

exports.getDOGECOIN = async (req, res) => {
    try {

        let dogecoinData = await DOGECOINcrypto.findOne();

        res.json(dogecoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de DOGECOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de DOGECOIN' });
    }
};
