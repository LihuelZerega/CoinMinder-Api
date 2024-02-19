const { RIPPLEcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateRIPPLEData');

exports.getRIPPLE = async (req, res) => {
  try {
    const rippleData = await RIPPLEcrypto.findOne();
    if (!rippleData) {
      return res.status(404).json({ error: 'No se encontraron datos para RIPPLE' });
    }
    res.json(rippleData);
  } catch (error) {
    console.error('Error al obtener la cotización de RIPPLE:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updateRIPPLEData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de RIPPLE actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de RIPPLE:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
