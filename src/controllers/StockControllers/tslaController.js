const { TSLAstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateTSLAData');

exports.getTSLA = async (req, res) => {
  try {
    const tslaData = await TSLAstock.findOne();
    if (!tslaData) {
      return res.status(404).json({ error: 'No se encontraron datos para TSLA' });
    }
    res.json(tslaData);
  } catch (error) {
    console.error('Error al obtener la cotización de TSLA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateTSLAData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de TSLA actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de TSLA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};