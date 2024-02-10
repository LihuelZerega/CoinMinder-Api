const axios = require('axios');
require("dotenv").config();
const { VZstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=VZ&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await VZstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('VZ stock data updated successfully.');
  } catch (error) {
    console.error('Error updating VZ stock data:', error);
  }
}

fetchDataAndStoreInDatabase();