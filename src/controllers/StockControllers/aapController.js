const { AAPstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/StocksUpdateDatas/updateAAPData');

exports.getAAP = async (req, res) => {
  try {
    const aapData = await AAPstock.findOne();
    if (!aapData) {
      return res.status(404).json({ error: 'No se encontraron datos para AAP' });
    }
    res.json(aapData);
  } catch (error) {
    console.error('Error al obtener la cotización de AAP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateAAPData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de AAP actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de AAP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
