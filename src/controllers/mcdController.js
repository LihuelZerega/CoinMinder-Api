const { MCDstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateMCDData');

exports.getMCD = async (req, res) => {
  try {
    const mcdData = await MCDstock.findOne();
    if (!mcdData) {
      return res.status(404).json({ error: 'No se encontraron datos para MCD' });
    }
    res.json(mcdData);
  } catch (error) {
    console.error('Error al obtener la cotización de MCD:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateMCDData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de MCD actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de MCD:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};