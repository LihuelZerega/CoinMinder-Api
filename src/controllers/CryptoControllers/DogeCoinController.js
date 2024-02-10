const { DOGECOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateDOGECOINData');

exports.getDOGECOIN = async (req, res) => {
  try {
    const dogecoinData = await DOGECOINcrypto.findOne();
    if (!dogecoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para DOGECOIN' });
    }
    res.json(dogecoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de DOGECOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateDOGECOINData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de DOGECOIN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de DOGECOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
