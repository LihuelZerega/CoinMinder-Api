const { INTERNETCOMPUTERcrypto } = require('../../db');

exports.getINTERNETCOMPUTER = async (req, res) => {
    try {

        let internetcomputerData = await INTERNETCOMPUTERcrypto.findOne();

        res.json(internetcomputerData);
    } catch (error) {
        console.error('Error al obtener la cotización de INTERNETCOMPUTER:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de INTERNETCOMPUTER' });
    }
};
