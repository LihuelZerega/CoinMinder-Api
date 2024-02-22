const { TOINCOINcrypto } = require('../../db');

exports.getTOINCOIN = async (req, res) => {
    try {

        let toincoinData = await TOINCOINcrypto.findOne();

        res.json(toincoinData);
    } catch (error) {
        console.error('Error al obtener la cotización de TOINCOIN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de TOINCOIN' });
    }
};
