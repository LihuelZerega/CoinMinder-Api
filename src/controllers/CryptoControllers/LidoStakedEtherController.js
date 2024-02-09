const { LIDOSTAKEDcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateLIDOSTAKEDData');

exports.getLIDOSTAKED = async (req, res) => {
  try {
    const lidostakedData = await LIDOSTAKEDcrypto.findOne();
    if (!lidostakedData) {
      return res.status(404).json({ error: 'No se encontraron datos para LIDOSTAKED' });
    }
    res.json(lidostakedData);
  } catch (error) {
    console.error('Error al obtener la cotización de LIDOSTAKED:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateLIDOSTAKEDData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de LIDOSTAKED actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de LIDOSTAKED:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
