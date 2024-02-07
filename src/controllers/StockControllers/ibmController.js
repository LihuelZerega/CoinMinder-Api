const { IBMstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateIBMData');

exports.getIBM = async (req, res) => {
  try {
    const ibmData = await IBMstock.findOne();
    if (!ibmData) {
      return res.status(404).json({ error: 'No se encontraron datos para IBM' });
    }
    res.json(ibmData);
  } catch (error) {
    console.error('Error al obtener la cotización de IBM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateIBMData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de IBM actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de IBM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};