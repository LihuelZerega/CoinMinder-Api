const { CARDANOcrypto } = require('../../db');

exports.getCARDANO = async (req, res) => {
    try {

        let cardanoData = await CARDANOcrypto.findOne();

        res.json(cardanoData);
    } catch (error) {
        console.error('Error al obtener la cotización de CARDANO:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de CARDANO' });
    }
};
