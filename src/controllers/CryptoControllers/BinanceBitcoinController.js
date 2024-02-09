const { BINANCEBITCOINcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateBINANCEBITCOINData');

exports.getBINANCEBITCOIN = async (req, res) => {
  try {
    const binancebitcoinData = await BINANCEBITCOINcrypto.findOne();
    if (!binancebitcoinData) {
      return res.status(404).json({ error: 'No se encontraron datos para BINANCEBITCOIN' });
    }
    res.json(binancebitcoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de BINANCEBITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateBINANCEBITCOINData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de BINANCEBITCOIN actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de BINANCEBITCOIN:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
