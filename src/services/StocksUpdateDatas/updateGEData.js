const axios = require('axios');
require("dotenv").config();
const { GEstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=GE&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await GEstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('GE stock data updated successfully.');
  } catch (error) {
    console.error('Error updating GE stock data:', error);
  }
}

fetchDataAndStoreInDatabase();