const axios = require('axios');
const { POLYGONcrypto, sequelize } = require('../../db');

async function updatePolygonData() {
    try {
        const tableExists = await sequelize.getQueryInterface().showAllTables().then(tables => {
            return tables.includes('POLYGONcryptos');
        });

        if (tableExists) {
            await POLYGONcrypto.destroy({ where: {} });
        }

        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=matic-network&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`);

        if (response.data && response.data.length > 0) {
            const polygonData = response.data[0];

            const {
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
            } = polygonData;

            await POLYGONcrypto.create({
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

            console.log('Datos de Polygon actualizados correctamente.');
        } else {
            console.error('La respuesta de la API de CoinGecko está vacía o no contiene datos para Polygon.');
        }
    } catch (error) {
        console.error(`Error al actualizar los datos de Polygon: ${error.message}`);
    }
}

module.exports = { updatePolygonData };