const { AVALANCHEcrypto } = require('../../db');
const { updateAvalancheData } = require('../../services/CryptosUpdateDatas/avalancheUpdater');

exports.getAVALANCHE = async (req, res) => {
    try {
        await updateAvalancheData();

        let avalancheData = await AVALANCHEcrypto.findOne();

        res.json(avalancheData);
    } catch (error) {
        console.error('Error al obtener la cotización de AVALANCHE:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de AVALANCHE' });
    }
};
