const axios = require('axios');
require("dotenv").config();
const { GSstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=GS&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await GSstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('GS stock data updated successfully.');
  } catch (error) {
    console.error('Error updating GS stock data:', error);
  }
}

fetchDataAndStoreInDatabase();