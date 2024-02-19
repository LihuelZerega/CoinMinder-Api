const { COSMOSHUBcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateCOSMOSHUBData');

exports.getCOSMOSHUB = async (req, res) => {
  try {
    const cosmoshubData = await COSMOSHUBcrypto.findOne();
    if (!cosmoshubData) {
      return res.status(404).json({ error: 'No se encontraron datos para COSMOSHUB' });
    }
    res.json(cosmoshubData);
  } catch (error) {
    console.error('Error al obtener la cotización de COSMOSHUB:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updateCOSMOSHUBData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de COSMOSHUB actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de COSMOSHUB:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
