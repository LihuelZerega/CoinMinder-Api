const axios = require('axios');
require("dotenv").config();
const { PEPstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=PEP&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await PEPstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('PEP stock data updated successfully.');
  } catch (error) {
    console.error('Error updating PEP stock data:', error);
  }
}

fetchDataAndStoreInDatabase();