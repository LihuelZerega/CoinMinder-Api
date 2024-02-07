const { FBstock } = require('../db');
const { fetchDataAndStoreInDatabase } = require('../services/updateFBData');

exports.getFB = async (req, res) => {
  try {
    const fbData = await FBstock.findOne();
    if (!fbData) {
      return res.status(404).json({ error: 'No se encontraron datos para FB' });
    }
    res.json(fbData);
  } catch (error) {
    console.error('Error al obtener la cotización de FB:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateFBData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de FB actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de FB:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};