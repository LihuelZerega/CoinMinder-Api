const axios = require('axios');
require("dotenv").config();
const { CSCOstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=CSCO&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await CSCOstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('CSCO stock data updated successfully.');
  } catch (error) {
    console.error('Error updating CSCO stock data:', error);
  }
}

fetchDataAndStoreInDatabase();