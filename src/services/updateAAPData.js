const axios = require('axios');
require("dotenv").config();
const { AAPstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AAP&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await AAPstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AAP stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AAP stock data:', error);
  }
}

fetchDataAndStoreInDatabase();