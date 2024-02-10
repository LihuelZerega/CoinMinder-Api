const axios = require('axios');
require("dotenv").config();
const { CHAINLINKcrypto } = require('../../db');

async function fetchDataAndStoreInDatabase() {
  try {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=chainlink&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);
    
    if (response.data && response.data.length > 0) {
      const chainlinkData = response.data[0];

      const { symbol, name, image, current_price, market_cap, market_cap_rank, fully_diluted_valuation, total_volume, high_24h, low_24h, price_change_24h, price_change_percentage_24h, market_cap_change_24h, market_cap_change_percentage_24h, circulating_supply, total_supply, max_supply, ath, ath_change_percentage, ath_date, roi, last_updated } = bitcoinData;

      await CHAINLINKcrypto.upsert({
        symbol,
        name,
        image,
        current_price,
        market_cap,
        market_cap_rank,
        fully_diluted_valuation,
        total_volume,
        high_24h,
        low_24h,
        price_change_24h,
        price_change_percentage_24h,
        market_cap_change_24h,
        market_cap_change_percentage_24h,
        circulating_supply,
        total_supply,
        max_supply,
        ath,
        ath_change_percentage,
        ath_date,
        roi,
        last_updated
      });

      console.log('Datos de ChainLink actualizados correctamente.');
    } else {
      console.error('La respuesta de la API de CoinGecko está vacía o no contiene datos para ChainLink.');
    }
  } catch (error) {
    console.error('Error al actualizar los datos de ChainLink:', error.message);
    throw error;
  }
}

fetchDataAndStoreInDatabase();