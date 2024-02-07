const { DISstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateDISData');

exports.getDIS = async (req, res) => {
  try {
    const disData = await DISstock.findOne();
    if (!disData) {
      return res.status(404).json({ error: 'No se encontraron datos para DIS' });
    }
    res.json(disData);
  } catch (error) {
    console.error('Error al obtener la cotización de DIS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateDISData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de DIS actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de DIS:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};