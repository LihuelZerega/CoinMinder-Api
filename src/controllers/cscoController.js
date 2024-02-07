const { CSCOstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateCSCOData');

exports.getCSCO = async (req, res) => {
  try {
    const cscoData = await CSCOstock.findOne();
    if (!cscoData) {
      return res.status(404).json({ error: 'No se encontraron datos para CSCO' });
    }
    res.json(cscoData);
  } catch (error) {
    console.error('Error al obtener la cotización de CSCO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateCSCOData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de CSCO actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de CSCO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};