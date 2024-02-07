const { MSstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateMSData');

exports.getMS = async (req, res) => {
  try {
    const msData = await MSstock.findOne();
    if (!msData) {
      return res.status(404).json({ error: 'No se encontraron datos para MS' });
    }
    res.json(msData);
  } catch (error) {
    console.error('Error al obtener la cotización de MS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateMSData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de MS actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de MS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};