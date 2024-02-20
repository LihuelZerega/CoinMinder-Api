const { BITCOINCASHcrypto } = require('../../db');
const { updateBitcoincashData } = require('../../services/CryptosUpdateDatas/bitcoincashUpdater');

exports.getBITCOINCASH = async (req, res) => {
    try {
        await updateBitcoincashData();

        let bitcoincashData = await BITCOINCASHcrypto.findOne();

        res.json(bitcoincashData);
    } catch (error) {
        console.error('Error al obtener la cotización de BITCOINCASH:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de BITCOINCASH' });
    }
};
