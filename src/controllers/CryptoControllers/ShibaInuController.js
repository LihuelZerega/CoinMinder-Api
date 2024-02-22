const { SHIBAINUcrypto } = require('../../db');

exports.getSHIBAINU = async (req, res) => {
    try {

        let shibainuData = await SHIBAINUcrypto.findOne();

        res.json(shibainuData);
    } catch (error) {
        console.error('Error al obtener la cotización de SHIBAINU:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de SHIBAINU' });
    }
};
