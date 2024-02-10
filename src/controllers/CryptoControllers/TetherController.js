const { TETHERcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/CryptosUpdateDatas/updateTETHERData');

exports.getTETHER = async (req, res) => {
  try {
    const tetherData = await TETHERcrypto.findOne();
    if (!tetherData) {
      return res.status(404).json({ error: 'No se encontraron datos para TETHER' });
    }
    res.json(tetherData);
  } catch (error) {
    console.error('Error al obtener la cotización de TETHER:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateTETHERData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de TETHER actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de TETHER:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
