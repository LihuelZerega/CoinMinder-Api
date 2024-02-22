const { SOLANAcrypto } = require('../../db');

exports.getSOLANA = async (req, res) => {
    try {

        let solanaData = await SOLANAcrypto.findOne();

        res.json(solanaData);
    } catch (error) {
        console.error('Error al obtener la cotización de SOLANA:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de SOLANA' });
    }
};
