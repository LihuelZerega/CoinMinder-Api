const axios = require('axios');
require("dotenv").config();
const { AMZstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=AMZ&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await AMZstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AMZ stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AMZ stock data:', error);
  }
}

fetchDataAndStoreInDatabase();