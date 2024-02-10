const { KOstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateKOData');

exports.getKO = async (req, res) => {
  try {
    const koData = await KOstock.findOne();
    if (!koData) {
      return res.status(404).json({ error: 'No se encontraron datos para KO' });
    }
    res.json(koData);
  } catch (error) {
    console.error('Error al obtener la cotización de KO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateKOData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de KO actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de KO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};