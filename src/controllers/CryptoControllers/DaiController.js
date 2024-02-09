const { DAIcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateDAIData');

exports.getDAI = async (req, res) => {
  try {
    const daiData = await DAIcrypto.findOne();
    if (!daiData) {
      return res.status(404).json({ error: 'No se encontraron datos para DAI' });
    }
    res.json(daiData);
  } catch (error) {
    console.error('Error al obtener la cotización de DAI:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateDAIData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de DAI actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de DAI:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
