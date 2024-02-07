const axios = require('axios');
require("dotenv").config();
const { GOOGLstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=GOOGL&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await GOOGLstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('GOOGL stock data updated successfully.');
  } catch (error) {
    console.error('Error updating GOOGL stock data:', error);
  }
}

fetchDataAndStoreInDatabase();