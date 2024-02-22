const { LEOTOKENcrypto } = require('../../db');

exports.getLEOTOKEN = async (req, res) => {
    try {

        let leotokenData = await LEOTOKENcrypto.findOne();

        res.json(leotokenData);
    } catch (error) {
        console.error('Error al obtener la cotización de LEOTOKEN:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de LEOTOKEN' });
    }
};
