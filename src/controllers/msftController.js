const { MSFTstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateMSFTData');

exports.getMSFT = async (req, res) => {
  try {
    const msftData = await MSFTstock.findOne();
    if (!msftData) {
      return res.status(404).json({ error: 'No se encontraron datos para MSFT' });
    }
    res.json(msftData);
  } catch (error) {
    console.error('Error al obtener la cotización de MSFT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateMSFTData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de MSFT actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de MSFT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};