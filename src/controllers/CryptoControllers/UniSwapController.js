const { UNISWAPcrypto } = require('../../db');
const { updateUniswapData } = require('../../services/CryptosUpdateDatas/updateUNISWAPData');

exports.getUNISWAP = async (req, res) => {
    try {
        await updateUniswapData();

        let uniswapData = await UNISWAPcrypto.findOne();

        res.json(uniswapData);
    } catch (error) {
        console.error('Error al obtener la cotización de UNISWAP:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de UNISWAP' });
    }
};
