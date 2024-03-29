const axios = require('axios');
require("dotenv").config();
const { FBstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=FB&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await FBstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('FB stock data updated successfully.');
  } catch (error) {
    console.error('Error updating FB stock data:', error);
  }
}

fetchDataAndStoreInDatabase();