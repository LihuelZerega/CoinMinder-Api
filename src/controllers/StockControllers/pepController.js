const { PEPstock } = require('../../db');
const { fetchDataAndStoreInDatabase } = require('../../services/updatePEPData');

exports.getPEP = async (req, res) => {
  try {
    const pepData = await PEPstock.findOne();
    if (!pepData) {
      return res.status(404).json({ error: 'No se encontraron datos para PEP' });
    }
    res.json(pepData);
  } catch (error) {
    console.error('Error al obtener la cotización de PEP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

exports.updatePEPData = async (req, res) => {
  try {
    await fetchDataAndStoreInDatabase();
    res.status(200).json({ message: 'Datos de PEP actualizados correctamente.' });
  } catch (error) {
    console.error('Error al actualizar los datos de PEP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};