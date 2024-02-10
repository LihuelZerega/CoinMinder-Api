const axios = require('axios');
require("dotenv").config();
const { IBMstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=IBM&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await IBMstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('IBM stock data updated successfully.');
  } catch (error) {
    console.error('Error updating IBM stock data:', error);
  }
}

fetchDataAndStoreInDatabase();