const { AMZNstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateAMZNData');

exports.getAMZN = async (req, res) => {
  try {
    const amznData = await AMZNstock.findOne();
    if (!amznData) {
      return res.status(404).json({ error: 'No se encontraron datos para AMZN' });
    }
    res.json(amznData);
  } catch (error) {
    console.error('Error al obtener la cotización de AMZN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAMZNData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AMZN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AMZN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};