const { CHAINLINKcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateCHAINLINKData');

exports.getCHAINLINK = async (req, res) => {
  try {
    const chainlinkData = await CHAINLINKcrypto.findOne();
    if (!chainlinkData) {
      return res.status(404).json({ error: 'No se encontraron datos para CHAINLINK' });
    }
    res.json(chainlinkData);
  } catch (error) {
    console.error('Error al obtener la cotización de CHAINLINK:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateCHAINLINKData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de CHAINLINK actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de CHAINLINK:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
