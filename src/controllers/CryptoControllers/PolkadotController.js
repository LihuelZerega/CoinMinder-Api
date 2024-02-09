const { POLKADOTcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updatePOLKADOTData');

exports.getPOLKADOT = async (req, res) => {
  try {
    const polkadotData = await POLKADOTcrypto.findOne();
    if (!polkadotData) {
      return res.status(404).json({ error: 'No se encontraron datos para POLKADOT' });
    }
    res.json(polkadotData);
  } catch (error) {
    console.error('Error al obtener la cotización de POLKADOT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updatePOLKADOTData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de POLKADOT actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de POLKADOT:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
