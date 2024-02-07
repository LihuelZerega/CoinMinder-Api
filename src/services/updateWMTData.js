const axios = require('axios');
require("dotenv").config();
const { WMTstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=WMT&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await WMTstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('WMT stock data updated successfully.');
  } catch (error) {
    console.error('Error updating WMT stock data:', error);
  }
}

fetchDataAndStoreInDatabase();