const axios = require('axios');
require("dotenv").config();
const { NVDAstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=NVDA&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await NVDAstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('NVDA stock data updated successfully.');
  } catch (error) {
    console.error('Error updating NVDA stock data:', error);
  }
}

fetchDataAndStoreInDatabase();