const { GSstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateGSData');

exports.getGS = async (req, res) => {
  try {
    const gsData = await GSstock.findOne();
    if (!gsData) {
      return res.status(404).json({ error: 'No se encontraron datos para GS' });
    }
    res.json(gsData);
  } catch (error) {
    console.error('Error al obtener la cotización de GS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateGSData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de GS actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de GS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};