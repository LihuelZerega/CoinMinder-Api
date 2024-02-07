const { WMTstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateWMTData');

exports.getWMT = async (req, res) => {
  try {
    const wmtData = await WMTstock.findOne();
    if (!wmtData) {
      return res.status(404).json({ error: 'No se encontraron datos para WMT' });
    }
    res.json(wmtData);
  } catch (error) {
    console.error('Error al obtener la cotización de WMT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateWMTData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de WMT actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de WMT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};