const { DAIcrypto } = require('../../db');
const { updateDaiData } = require('../../services/CryptosUpdateDatas/updateDAIData');

exports.getDAI = async (req, res) => {
    try {
        await updateDaiData();

        let daiData = await DAIcrypto.findOne();

        res.json(daiData);
    } catch (error) {
        console.error('Error al obtener la cotización de DAI:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de DAI' });
    }
};
