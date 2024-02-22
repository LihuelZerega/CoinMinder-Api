const { TRONcrypto } = require('../../db');

exports.getTRON = async (req, res) => {
    try {

        let tronData = await TRONcrypto.findOne();

        res.json(tronData);
    } catch (error) {
        console.error('Error al obtener la cotización de TRON:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de TRON' });
    }
};
