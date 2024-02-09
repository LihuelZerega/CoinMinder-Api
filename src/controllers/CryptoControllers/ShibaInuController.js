const { SHIBAINUcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateSHIBAINUData');

exports.getSHIBAINU = async (req, res) => {
  try {
    const shibainuData = await SHIBAINUcrypto.findOne();
    if (!shibainuData) {
      return res.status(404).json({ error: 'No se encontraron datos para SHIBAINU' });
    }
    res.json(shibainuData);
  } catch (error) {
    console.error('Error al obtener la cotización de SHIBAINU:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateSHIBAINUData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de SHIBAINU actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de SHIBAINU:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
