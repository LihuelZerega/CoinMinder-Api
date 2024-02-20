const { SHIBAINUcrypto } = require('../../db');
const { updateSolanaData } = require('../../services/CryptosUpdateDatas/updateSOLANAData');

exports.getSHIBAINU = async (req, res) => {
    try {
        await updateSolanaData();

        let solanaData = await SHIBAINUcrypto.findOne();

        res.json(solanaData);
    } catch (error) {
        console.error('Error al obtener la cotización de SHIBAINU:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de SHIBAINU' });
    }
};
