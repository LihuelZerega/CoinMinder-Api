const { LIDOSTAKEDcrypto } = require('../../db');
const { updateLidostackedetherData } = require('../../services/CryptosUpdateDatas/updateLIDOSTAKEDETHERData');

exports.getLIDOSTAKED = async (req, res) => {
    try {
        await updateLidostackedetherData();

        let lidostakedetherData = await LIDOSTAKEDcrypto.findOne();

        res.json(lidostakedetherData);
    } catch (error) {
        console.error('Error al obtener la cotización de LIDOSTAKEDETHE:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de LIDOSTAKEDETHE' });
    }
};
