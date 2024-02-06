const axios = require('axios');
const AAPL = require('../models/AAPL');

const updateAAPLData = async (req, res, next) => {
  try {
    const response = await axios.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=cmshlb9r01qqj2tig7k0cmshlb9r01qqj2tig7kg');
    const responseData = response.data;

    await AAPL.create({
      c: responseData.c,
      d: responseData.d,
      dp: responseData.dp,
      h: responseData.h,
      l: responseData.l,
      o: responseData.o,
      pc: responseData.pc
    });

    next();
  } catch (error) {
    console.error('Error al actualizar los datos de AAPL:', error);
    res.status(500).json({ error: 'Error interno del servidor al actualizar los datos de AAPL' });
  }
};

module.exports = updateAAPLData;
