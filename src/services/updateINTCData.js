const axios = require('axios');
require("dotenv").config();
const { INTCstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=INTC&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await INTCstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('INTC stock data updated successfully.');
  } catch (error) {
    console.error('Error updating INTC stock data:', error);
  }
}

fetchDataAndStoreInDatabase();