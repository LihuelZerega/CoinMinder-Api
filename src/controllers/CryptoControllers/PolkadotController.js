const { POLKADOTcrypto } = require('../../db');
const { updatePolkadotData } = require('../../services/CryptosUpdateDatas/updatePOLKADOTData');

exports.getPOLKADOT = async (req, res) => {
    try {
        await updatePolkadotData();

        let polkadotData = await POLKADOTcrypto.findOne();

        res.json(polkadotData);
    } catch (error) {
        console.error('Error al obtener la cotización de POLKADOT:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de POLKADOT' });
    }
};
