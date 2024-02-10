const axios = require('axios');
require("dotenv").config();
const { AMZNstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AMZN&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await AMZNstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AMZN stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AMZN stock data:', error);
  }
}

fetchDataAndStoreInDatabase();