const axios = require('axios');
const { AAPLstock } = require('../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get('https://finnhub.io/api/v1/quote?symbol=AAPL&token=cmshlb9r01qqj2tig7k0cmshlb9r01qqj2tig7kg');
    const { c, d, dp, h, l, o, pc } = response.data;

    await AAPLstock.upsert({
      c,
      d,
      dp,
      h,
      l,
      o,
      pc
    });

    console.log('AAPL stock data updated successfully.');
  } catch (error) {
    console.error('Error updating AAPL stock data:', error);
  }
}

fetchDataAndStoreInDatabase();