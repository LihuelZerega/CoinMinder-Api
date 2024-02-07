const { AMDstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateAMDData');

exports.getAMD = async (req, res) => {
  try {
    const amdData = await AMDstock.findOne();
    if (!amdData) {
      return res.status(404).json({ error: 'No se encontraron datos para AMD' });
    }
    res.json(amdData);
  } catch (error) {
    console.error('Error al obtener la cotización de AMD:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAMDData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AMD actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AMD:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};