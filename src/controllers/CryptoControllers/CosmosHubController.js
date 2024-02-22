const { COSMOSHUBcrypto } = require('../../db');

exports.getCOSMOSHUB = async (req, res) => {
    try {

        let cosmohubData = await COSMOSHUBcrypto.findOne();

        res.json(cosmohubData);
    } catch (error) {
        console.error('Error al obtener la cotización de COSMOSHUB:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de COSMOSHUB' });
    }
};
