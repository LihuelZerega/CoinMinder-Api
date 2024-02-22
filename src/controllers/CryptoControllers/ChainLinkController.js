const { CHAINLINKcrypto } = require('../../db');

exports.getCHAINLINK = async (req, res) => {
    try {

        let chainlinkData = await CHAINLINKcrypto.findOne();

        res.json(chainlinkData);
    } catch (error) {
        console.error('Error al obtener la cotización de CHAINLINK:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de CHAINLINK' });
    }
};
