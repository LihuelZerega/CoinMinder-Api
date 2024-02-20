const { CHAINLINKcrypto } = require('../../db');
const { updateChainlinkData } = require('../../services/CryptosUpdateDatas/updateCHAINLINKData');

exports.getCHAINLINK = async (req, res) => {
    try {
        await updateChainlinkData();

        let chainlinkData = await CHAINLINKcrypto.findOne();

        res.json(chainlinkData);
    } catch (error) {
        console.error('Error al obtener la cotización de CHAINLINK:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de CHAINLINK' });
    }
};
