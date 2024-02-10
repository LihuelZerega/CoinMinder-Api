const { GEstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateGEData');

exports.getGE = async (req, res) => {
  try {
    const geData = await GEstock.findOne();
    if (!geData) {
      return res.status(404).json({ error: 'No se encontraron datos para GE' });
    }
    res.json(geData);
  } catch (error) {
    console.error('Error al obtener la cotización de GE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateGEData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de GE actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de GE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};