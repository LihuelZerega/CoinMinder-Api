const axios = require('axios');
require("dotenv").config();
const { JPMstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=JPM&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await JPMstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('JPM stock data updated successfully.');
  } catch (error) {
    console.error('Error updating JPM stock data:', error);
  }
}

fetchDataAndStoreInDatabase();