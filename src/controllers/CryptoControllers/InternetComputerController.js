const { INTERNETCOMPUTERcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateINTERNETCOMPUTERData');

exports.getINTERNETCOMPUTER = async (req, res) => {
  try {
    const internetcomputerData = await INTERNETCOMPUTERcrypto.findOne();
    if (!internetcomputerData) {
      return res.status(404).json({ error: 'No se encontraron datos para INTERNETCOMPUTER' });
    }
    res.json(internetcomputerData);
  } catch (error) {
    console.error('Error al obtener la cotización de INTERNETCOMPUTER:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// exports.updateINTERNETCOMPUTERData = async (req, res) => {
//   try {
//     await fetchDataAndStoreInDatabase();
//     res.status(200).json({ message: 'Datos de INTERNETCOMPUTER actualizados correctamente.' });
//   } catch (error) {
//     console.error('Error al actualizar los datos de INTERNETCOMPUTER:', error);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
