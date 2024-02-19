const { LITECOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateLITECOINData');

exports.getLITECOIN = async (req, res) => {
  try {
    const litecoinData = await LITECOINcrypto.findOne();
    if (!litecoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para LITECOIN' });
    }
    res.json(litecoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de LITECOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updateLITECOINData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de LITECOIN actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de LITECOIN:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
