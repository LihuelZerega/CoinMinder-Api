const { POLYGONcrypto } = require('../../db');

exports.getPOLYGON = async (req, res) => {
    try {

        let polygonData = await POLYGONcrypto.findOne();

        res.json(polygonData);
    } catch (error) {
        console.error('Error al obtener la cotización de POLYGON:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de POLYGON' });
    }
};
