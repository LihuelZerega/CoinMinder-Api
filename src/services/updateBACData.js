const axios = require('axios');
require("dotenv").config();
const { BACstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=BAC&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await BACstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('BAC stock data updated successfully.');
  } catch (error) {
    console.error('Error updating BAC stock data:', error);
  }
}

fetchDataAndStoreInDatabase();