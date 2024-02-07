const { JPMstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateJPMData');

exports.getJPM = async (req, res) => {
  try {
    const jpmData = await JPMstock.findOne();
    if (!jpmData) {
      return res.status(404).json({ error: 'No se encontraron datos para JPM' });
    }
    res.json(jpmData);
  } catch (error) {
    console.error('Error al obtener la cotización de JPM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateJPMData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de JPM actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de JPM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};