const { TOINCOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateTOINCOINData');

exports.getTOINCOIN = async (req, res) => {
  try {
    const toincoinData = await TOINCOINcrypto.findOne();
    if (!toincoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para TOINCOIN' });
    }
    res.json(toincoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de TOINCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateTOINCOINData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de TOINCOIN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de TOINCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
