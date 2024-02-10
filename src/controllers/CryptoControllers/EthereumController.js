const { ETHEREUMcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateETHEREUMData');

exports.getETHEREUM = async (req, res) => {
  try {
    const ethereumData = await ETHEREUMcrypto.findOne();
    if (!ethereumData) {
      return res.status(404).json({ error: 'No se encontraron datos para ETHEREUM' });
    }
    res.json(ethereumData);
  } catch (error) {
    console.error('Error al obtener la cotización de ETHEREUM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateETHEREUMData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de ETHEREUM actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de ETHEREUM:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
