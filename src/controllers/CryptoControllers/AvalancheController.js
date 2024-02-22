const { AVALANCHEcrypto } = require('../../db');

exports.getAVALANCHE = async (req, res) => {
    try {

        let avalancheData = await AVALANCHEcrypto.findOne();

        res.json(avalancheData);
    } catch (error) {
        console.error('Error al obtener la cotización de AVALANCHE:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de AVALANCHE' });
    }
};
