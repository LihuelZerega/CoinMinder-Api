const { LIDOSTAKEDcrypto } = require('../../db');

exports.getLIDOSTAKED = async (req, res) => {
    try {

        let lidostakedetherData = await LIDOSTAKEDcrypto.findOne();

        res.json(lidostakedetherData);
    } catch (error) {
        console.error('Error al obtener la cotización de LIDOSTAKEDETHE:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de LIDOSTAKEDETHE' });
    }
};
