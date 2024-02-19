const { USDCcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateUSDCData');

exports.getUSDC = async (req, res) => {
  try {
    const usdcData = await USDCcrypto.findOne();
    if (!usdcData) {
      return res.status(404).json({ error: 'No se encontraron datos para USDC' });
    }
    res.json(usdcData);
  } catch (error) {
    console.error('Error al obtener la cotización de USDC:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updateUSDCData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de USDC actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de USDC:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
