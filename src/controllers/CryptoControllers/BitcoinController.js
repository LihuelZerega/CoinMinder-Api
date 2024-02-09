const { BITCOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateBITCOINData');

exports.getBITCOIN = async (req, res) => {
  try {
    const bitcoinData = await BITCOINcrypto.findOne();
    if (!bitcoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para BITCOIN' });
    }
    res.json(bitcoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de BITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateBITCOINData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de BITCOIN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de BITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
