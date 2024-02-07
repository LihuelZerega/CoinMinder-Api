const { GOOGLstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateGOOGLData');

exports.getGOOGL = async (req, res) => {
  try {
    const googlData = await GOOGLstock.findOne();
    if (!googlData) {
      return res.status(404).json({ error: 'No se encontraron datos para GOOGL' });
    }
    res.json(googlData);
  } catch (error) {
    console.error('Error al obtener la cotización de GOOGL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateGOOGLData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de GOOGL actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de GOOGL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};