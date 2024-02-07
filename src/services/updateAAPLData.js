const axios = require('axios');
require("dotenv").config();
const { AAPLstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAPL&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await AAPLstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AAPL stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AAPL stock data:', error);
  }
}

fetchDataAndStoreInDatabase();