const { PYPLstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updatePYPLData');

exports.getPYPL = async (req, res) => {
  try {
    const pyplData = await PYPLstock.findOne();
    if (!pyplData) {
      return res.status(404).json({ error: 'No se encontraron datos para PYPL' });
    }
    res.json(pyplData);
  } catch (error) {
    console.error('Error al obtener la cotización de PYPL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updatePYPLData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de PYPL actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de PYPL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};