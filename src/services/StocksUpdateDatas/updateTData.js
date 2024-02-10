const axios = require('axios');
require("dotenv").config();
const { Tstock } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://finnhub.io/api/v1/quote?symbol=T&token=${process.env.FINNHUB_API_KEY}`);
    const { c, d, dp, h, l, o, pc } = response.data;

    await Tstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('T stock data updated successfully.');
  } catch (error) {
    console.error('Error updating T stock data:', error);
  }
}

fetchDataAndStoreInDatabase();