const axios = require('axios');
require("dotenv").config();
const { AMDstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AMD&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await AMDstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AMD stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AMD stock data:', error);
  }
}

fetchDataAndStoreInDatabase();