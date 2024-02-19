const { BITCOINcrypto } = require('../../db');
const { updateBitcoinData } = require('../../services/CryptosUpdateDatas/bitcoinUpdater');

exports.getBITCOIN = async (req, res) => {
  try {
    const bitcoinData = await BITCOINcrypto.findOne();
    
    if (bitcoinData) {
      return res.json(bitcoinData);
    }

    await updateBitcoinData();

    const updatedBitcoinData = await BITCOINcrypto.findOne();
    
    res.json(updatedBitcoinData);
  } catch (error) {
    console.error('Error al obtener la cotización de BITCOIN:', error.message);
    res.status(500).json({ error: 'Error al obtener la cotización de BITCOIN' });
  }
};


exports.updateBITCOINData = async (req, res) => {
  try {
    await updateBitcoinData();
    res.status(200).json({ message: 'Datos de BITCOIN actualizados correctamente.' });
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.error('Error al actualizar los datos de BITCOIN: No se encontró la cotización de BITCOIN');
      res.status(404).json({ error: 'No se encontró la cotización de BITCOIN' });
    } else if (error.response) {
      console.error('Error al actualizar los datos de BITCOIN:', error.response.data.message);
      res.status(error.response.status).json({ error: error.response.data.message });
    } else {
      console.error('Error al actualizar los datos de BITCOIN:', error.message);
      res.status(500).json({ error: 'Error al actualizar los datos de BITCOIN' });
    }
  }
};