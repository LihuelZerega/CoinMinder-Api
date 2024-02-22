const { DAIcrypto } = require('../../db');

exports.getDAI = async (req, res) => {
    try {

        let daiData = await DAIcrypto.findOne();

        res.json(daiData);
    } catch (error) {
        console.error('Error al obtener la cotización de DAI:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de DAI' });
    }
};
