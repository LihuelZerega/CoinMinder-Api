const { TETHERcrypto } = require('../../db');

exports.getTETHER = async (req, res) => {
    try {

        let tetherData = await TETHERcrypto.findOne();

        res.json(tetherData);
    } catch (error) {
        console.error('Error al obtener la cotización de TETHER:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de TETHER' });
    }
};
