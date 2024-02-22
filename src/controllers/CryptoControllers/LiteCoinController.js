const { LITECOINcrypto } = require('../../db');

exports.getLITECOIN = async (req, res) => {
    try {

        let litecoinData = await LITECOINcrypto.findOne();

        res.json(litecoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de LITECOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de LITECOIN' });
    }
};
