const axios = require('axios');
require("dotenv").config();
const { TSLAstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=TSLA&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await TSLAstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('TSLA stock data updated successfully.');
  } catch (error) {
    console.error('Error updating TSLA stock data:', error);
  }
}

fetchDataAndStoreInDatabase();