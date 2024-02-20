const { RIPPLEcrypto } = require('../../db');
const { updateRippleData } = require('../../services/CryptosUpdateDatas/updateRIPPLEData');

exports.getRIPPLE = async (req, res) => {
    try {
        await updateRippleData();

        let rippleData = await RIPPLEcrypto.findOne();

        res.json(rippleData);
    } catch (error) {
        console.error('Error al obtener la cotización de RIPPLE:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de RIPPLE' });
    }
};
