const { Tstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateTData');

exports.getT = async (req, res) => {
  try {
    const tData = await Tstock.findOne();
    if (!tData) {
      return res.status(404).json({ error: 'No se encontraron datos para T' });
    }
    res.json(tData);
  } catch (error) {
    console.error('Error al obtener la cotización de T:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateTData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de T actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de T:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};