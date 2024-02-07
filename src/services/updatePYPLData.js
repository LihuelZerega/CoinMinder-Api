const axios = require('axios');
require("dotenv").config();
const { PYPLstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=PYPL&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await PYPLstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('PYPL stock data updated successfully.');
  } catch (error) {
    console.error('Error updating PYPL stock data:', error);
  }
}

fetchDataAndStoreInDatabase();