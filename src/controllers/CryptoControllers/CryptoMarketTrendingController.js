const { CryptoMarketTrendingDatacrypto } = require('../../db');
const axios = require('axios');
const { handleControllerError } = require('../../utils/errorHandling');

async function fetchDataAndStoreInDatabase() {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
        const { name, symbol, thumb, small, large, market_cap_rank } = response.data.coins[0].item;
        const { price, price_btc, market_cap, market_cap_btc, total_volume, total_volume_btc, sparkline } = response.data.coins[0].item.data;        

        console.log('Datos obtenidos de la API:', {
            name,
            symbol,
            thumb,
            small,
            large,
            price,
            price_btc,
            market_cap,
            market_cap_btc,
            market_cap_rank,
            total_volume,
            total_volume_btc,
            sparkline
        });

        let existingData = await CryptoMarketTrendingDatacrypto.findOne();
        if (existingData) {
            await existingData.update({
                name,
                symbol,
                thumb,
                small,
                large,
                price,
                price_btc,
                market_cap,
                market_cap_btc,
                market_cap_rank,
                total_volume,
                total_volume_btc,
                sparkline
            });
            console.log('Crypto Market Trending data updated successfully.');
        } else {
            await CryptoMarketTrendingDatacrypto.create({
                name,
                symbol,
                thumb,
                small,
                large,
                price,
                price_btc,
                market_cap,
                market_cap_btc,
                market_cap_rank,
                total_volume,
                total_volume_btc,
                sparkline
            });
            console.log('Crypto Market Trending data inserted successfully.');
        }
    } catch (error) {
        console.error('Error updating Crypto Market Trending data:', error.message);
        throw new Error('Error updating Crypto Market Trending data');
    }
}

exports.updateCryptoMarketTrendingData = async (req, res) => {
    try {
        await fetchDataAndStoreInDatabase();
        res.status(200).json({ message: 'Datos de Crypto Market Trending Data actualizados correctamente.' });
    } catch (error) {
        handleControllerError(res, error);
    }
};

exports.getCryptoMarketTrendingData = async (req, res) => {
    try {
        const cryptomarkettrendingdataData = await CryptoMarketTrendingDatacrypto.findOne();
        if (!cryptomarkettrendingdataData) {
            return res.status(404).json({ error: 'No se encontraron datos para Crypto Market Trending Data' });
        }
        res.json(cryptomarkettrendingdataData);
    } catch (error) {
        handleControllerError(res, error, 'Error al obtener la cotización de Crypto Market Trending Data');
    }
};