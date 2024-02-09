const { SOLANAcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateSOLANAData');

exports.getSOLANA = async (req, res) => {
  try {
    const solanaData = await SOLANAcrypto.findOne();
    if (!solanaData) {
      return res.status(404).json({ error: 'No se encontraron datos para SOLANA' });
    }
    res.json(solanaData);
  } catch (error) {
    console.error('Error al obtener la cotización de SOLANA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateSOLANAData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de SOLANA actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de SOLANA:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
