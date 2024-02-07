const axios = require('axios');
require("dotenv").config();
const { DISstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=DIS&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await DISstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('DIS stock data updated successfully.');
  } catch (error) {
    console.error('Error updating DIS stock data:', error);
  }
}

fetchDataAndStoreInDatabase();