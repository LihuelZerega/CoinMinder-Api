const { BAstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateBAData');

exports.getBA = async (req, res) => {
  try {
    const baData = await BAstock.findOne();
    if (!baData) {
      return res.status(404).json({ error: 'No se encontraron datos para BA' });
    }
    res.json(baData);
  } catch (error) {
    console.error('Error al obtener la cotización de BA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateBAData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de BA actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de BA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};