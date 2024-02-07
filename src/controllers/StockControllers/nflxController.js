const { NFLXstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateNFLXData');

exports.getNFLX = async (req, res) => {
  try {
    const nflxData = await NFLXstock.findOne();
    if (!nflxData) {
      return res.status(404).json({ error: 'No se encontraron datos para NFLX' });
    }
    res.json(nflxData);
  } catch (error) {
    console.error('Error al obtener la cotización de NFLX:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateNFLXData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de NFLX actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de NFLX:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};