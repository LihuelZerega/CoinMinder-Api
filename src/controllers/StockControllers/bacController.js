const { BACstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateBACData');

exports.getBAC = async (req, res) => {
  try {
    const bacData = await BACstock.findOne();
    if (!bacData) {
      return res.status(404).json({ error: 'No se encontraron datos para BAC' });
    }
    res.json(bacData);
  } catch (error) {
    console.error('Error al obtener la cotización de BAC:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateBACData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de BAC actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de BAC:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};