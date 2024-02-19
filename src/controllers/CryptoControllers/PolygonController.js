const { POLYGONcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updatePOLYGONData');

exports.getPOLYGON = async (req, res) => {
  try {
    const polygonData = await POLYGONcrypto.findOne();
    if (!polygonData) {
      return res.status(404).json({ error: 'No se encontraron datos para POLYGON' });
    }
    res.json(polygonData);
  } catch (error) {
    console.error('Error al obtener la cotización de POLYGON:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updatePOLYGONData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de POLYGON actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de POLYGON:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
