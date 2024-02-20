const { SHIBAINUcrypto } = require('../../db');
const { updateShibainuData } = require('../../services/CryptosUpdateDatas/updateSHIBAINUData');

exports.getSHIBAINU = async (req, res) => {
    try {
        await updateShibainuData();

        let shibainuData = await SHIBAINUcrypto.findOne();

        res.json(shibainuData);
    } catch (error) {
        console.error('Error al obtener la cotización de SHIBAINU:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de SHIBAINU' });
    }
};
