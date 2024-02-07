const axios = require('axios');
require("dotenv").config();
const { MSFTstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=MSFT&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await MSFTstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('MSFT stock data updated successfully.');
  } catch (error) {
    console.error('Error updating MSFT stock data:', error);
  }
}

fetchDataAndStoreInDatabase();