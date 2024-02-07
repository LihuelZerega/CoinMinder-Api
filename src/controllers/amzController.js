const { AMZstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateAMZData');

exports.getAMZ = async (req, res) => {
  try {
    const amzData = await AMZstock.findOne();
    if (!amzData) {
      return res.status(404).json({ error: 'No se encontraron datos para AMZ' });
    }
    res.json(amzData);
  } catch (error) {
    console.error('Error al obtener la cotización de AMZ:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAMZData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AMZ actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AMZ:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};