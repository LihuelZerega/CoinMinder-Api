const { ETHEREUMcrypto } = require('../../db');

exports.getETHEREUM = async (req, res) => {
    try {

        let ethereumData = await ETHEREUMcrypto.findOne();

        res.json(ethereumData);
    } catch (error) {
        console.error('Error al obtener la cotización de ETHEREUM:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización de ETHEREUM' });
    }
};
