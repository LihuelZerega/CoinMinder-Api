const { TRONcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateTRONData');

exports.getTRON = async (req, res) => {
  try {
    const tronData = await TRONcrypto.findOne();
    if (!tronData) {
      return res.status(404).json({ error: 'No se encontraron datos para TRON' });
    }
    res.json(tronData);
  } catch (error) {
    console.error('Error al obtener la cotización de TRON:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateTRONData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de TRON actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de TRON:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
