const { AVALANCHEcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateAVALANCHEData');

exports.getAVALANCHE = async (req, res) => {
  try {
    const avalancheData = await AVALANCHEcrypto.findOne();
    if (!avalancheData) {
      return res.status(404).json({ error: 'No se encontraron datos para AVALANCHE' });
    }
    res.json(avalancheData);
  } catch (error) {
    console.error('Error al obtener la cotización de AVALANCHE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAVALANCHEData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AVALANCHE actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AVALANCHE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
