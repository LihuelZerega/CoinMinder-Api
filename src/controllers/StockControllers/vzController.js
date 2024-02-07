const { VZstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateVZData');

exports.getVZ = async (req, res) => {
  try {
    const vzData = await VZstock.findOne();
    if (!vzData) {
      return res.status(404).json({ error: 'No se encontraron datos para VZ' });
    }
    res.json(vzData);
  } catch (error) {
    console.error('Error al obtener la cotización de VZ:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateVZData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de VZ actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de VZ:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};