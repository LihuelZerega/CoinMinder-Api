const { USDCcrypto } = require('../../db');
const { updateUsdcData } = require('../../services/CryptosUpdateDatas/updateUSDCData');

exports.getUSDC = async (req, res) => {
    try {
        await updateUsdcData();

        let usdcData = await USDCcrypto.findOne();

        res.json(usdcData);
    } catch (error) {
        console.error('Error al obtener la cotización de USDC:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de USDC' });
    }
};
