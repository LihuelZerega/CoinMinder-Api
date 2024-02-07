const { NVDAstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateNVDAData');

exports.getNVDA = async (req, res) => {
  try {
    const nvdaData = await NVDAstock.findOne();
    if (!nvdaData) {
      return res.status(404).json({ error: 'No se encontraron datos para NVDA' });
    }
    res.json(nvdaData);
  } catch (error) {
    console.error('Error al obtener la cotización de NVDA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateNVDAData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de NVDA actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de NVDA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};