const { AAPLstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateAAPLData');

exports.getAAPL = async (req, res) => {
  try {
    const aaplData = await AAPLstock.findOne();
    if (!aaplData) {
      return res.status(404).json({ error: 'No se encontraron datos para AAPL' });
    }
    res.json(aaplData);
  } catch (error) {
    console.error('Error al obtener la cotización de AAPL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAAPLData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AAPL actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AAPL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};