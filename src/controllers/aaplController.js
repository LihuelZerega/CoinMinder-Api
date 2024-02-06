const AAPL = require('../models/AAPL');

exports.getAAPL = async (req, res) => {
  try {
    const aaplData = await AAPL.findOne();
    if (!aaplData) {
      return res.status(404).json({ error: 'No se encontraron datos para AAPL' });
    }
    res.json(aaplData);
  } catch (error) {
    console.error('Error al obtener la cotización de AAPL:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
