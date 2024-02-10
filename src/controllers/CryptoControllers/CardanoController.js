const { CARDANOcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateCARDANOData');

exports.getCARDANO = async (req, res) => {
  try {
    const cardanoData = await CARDANOcrypto.findOne();
    if (!cardanoData) {
      return res.status(404).json({ error: 'No se encontraron datos para CARDANO' });
    }
    res.json(cardanoData);
  } catch (error) {
    console.error('Error al obtener la cotización de CARDANO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateCARDANOData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de CARDANO actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de CARDANO:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
