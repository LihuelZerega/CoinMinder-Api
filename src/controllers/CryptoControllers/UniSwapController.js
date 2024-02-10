const { UNISWAPcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateUNISWAPData');

exports.getUNISWAP = async (req, res) => {
  try {
    const uniswapData = await UNISWAPcrypto.findOne();
    if (!uniswapData) {
      return res.status(404).json({ error: 'No se encontraron datos para UNISWAP' });
    }
    res.json(uniswapData);
  } catch (error) {
    console.error('Error al obtener la cotización de UNISWAP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateUNISWAPData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de UNISWAP actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de UNISWAP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
