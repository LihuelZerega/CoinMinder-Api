const AAP = require('../models/AAP');

exports.getAAP = async (req, res) => {
  try {
    const aapData = await AAP.findOne();
    if (!aapData) {
      return res.status(404).json({ error: 'No se encontraron datos para AAP' });
    }
    res.json(AAPData);
  } catch (error) {
    console.error('Error al obtener la cotización de AAP:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
