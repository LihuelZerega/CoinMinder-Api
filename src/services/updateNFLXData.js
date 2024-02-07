const axios = require('axios');
require("dotenv").config();
const { NFLXstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=NFLX&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await NFLXstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('NFLX stock data updated successfully.');
  } catch (error) {
    console.error('Error updating NFLX stock data:', error);
  }
}

fetchDataAndStoreInDatabase();