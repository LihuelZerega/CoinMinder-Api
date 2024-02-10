const axios = require('axios');
require("dotenv").config();
const { KOstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=KO&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await KOstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('KO stock data updated successfully.');
  } catch (error) {
    console.error('Error updating KO stock data:', error);
  }
}

fetchDataAndStoreInDatabase();