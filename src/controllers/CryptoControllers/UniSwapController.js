const { UNISWAPcrypto } = require('../../db');

exports.getUNISWAP = async (req, res) => {
    try {

        let uniswapData = await UNISWAPcrypto.findOne();

        res.json(uniswapData);
    } catch (error) {
        console.error('Error al obtener la cotización de UNISWAP:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de UNISWAP' });
    }
};
