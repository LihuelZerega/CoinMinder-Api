const axios = require('axios');
require("dotenv").config();
const { MCDstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=MCD&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await MCDstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('MCD stock data updated successfully.');
  } catch (error) {
    console.error('Error updating MCD stock data:', error);
  }
}

fetchDataAndStoreInDatabase();