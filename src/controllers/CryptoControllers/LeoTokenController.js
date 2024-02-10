const { LEOTOKENcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateLEOTOKENData');

exports.getLEOTOKEN = async (req, res) => {
  try {
    const leotokenData = await LEOTOKENcrypto.findOne();
    if (!leotokenData) {
      return res.status(404).json({ error: 'No se encontraron datos para LEOTOKEN' });
    }
    res.json(leotokenData);
  } catch (error) {
    console.error('Error al obtener la cotización de LEOTOKEN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateLEOTOKENData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de LEOTOKEN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de LEOTOKEN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
