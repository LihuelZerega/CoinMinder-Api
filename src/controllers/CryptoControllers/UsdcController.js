const { USDCcrypto } = require('../../db');

exports.getUSDC = async (req, res) => {
    try {
        let usdcData = await USDCcrypto.findOne();

        res.json(usdcData);
    } catch (error) {
        console.error('Error al obtener la cotización de USDC:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de USDC' });
    }
};
