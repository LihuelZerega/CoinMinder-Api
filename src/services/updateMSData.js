const axios = require('axios');
require("dotenv").config();
const { MSstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=MS&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await MSstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('MS stock data updated successfully.');
  } catch (error) {
    console.error('Error updating MS stock data:', error);
  }
}

fetchDataAndStoreInDatabase();