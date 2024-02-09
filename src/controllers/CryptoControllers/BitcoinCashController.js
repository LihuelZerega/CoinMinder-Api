const { BITCOINCASHcrypto } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updateBITCOINCASHData');

exports.getBITCOINCASH = async (req, res) => {
  try {
    const bitcoincashData = await BITCOINCASHcrypto.findOne();
    if (!bitcoincashData) {
      return res.status(404).json({ error: 'No se encontraron datos para BITCOINCASH' });
    }
    res.json(bitcoincashData);
  } catch (error) {
    console.error('Error al obtener la cotización de BITCOINCASH:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updateBITCOINCASHData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de BITCOINCASH actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de BITCOINCASH:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
