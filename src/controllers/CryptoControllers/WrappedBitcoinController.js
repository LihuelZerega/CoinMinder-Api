const { WRAPPEDBITCOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateWRAPPEDBITCOINData');

exports.getWRAPPEDBITCOIN = async (req, res) => {
  try {
    const wrappedbitcoinData = await WRAPPEDBITCOINcrypto.findOne();
    if (!wrappedbitcoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para WRAPPEDBITCOIN' });
    }
    res.json(wrappedbitcoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de WRAPPEDBITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateWRAPPEDBITCOINData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de WRAPPEDBITCOIN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de WRAPPEDBITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
