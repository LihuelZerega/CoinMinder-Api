const { INTCstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateINTCData');

exports.getINTC = async (req, res) => {
  try {
    const intcData = await INTCstock.findOne();
    if (!intcData) {
      return res.status(404).json({ error: 'No se encontraron datos para INTC' });
    }
    res.json(intcData);
  } catch (error) {
    console.error('Error al obtener la cotización de INTC:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateINTCData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de INTC actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de INTC:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};