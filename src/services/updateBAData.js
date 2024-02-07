const axios = require('axios');
require("dotenv").config();
const { BAstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=BA&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await BAstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('BA stock data updated successfully.');
  } catch (error) {
    console.error('Error updating BA stock data:', error);
  }
}

fetchDataAndStoreInDatabase();