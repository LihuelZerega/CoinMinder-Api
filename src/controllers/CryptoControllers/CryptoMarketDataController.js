const { CryptoMarketDatacrypto } = require('../../db');
const axios = require('axios');

async function fetchDataAndStoreInDatabase() {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/global`);
        const { active_cryptocurrencies, upcoming_icos, ongoing_icos, ended_icos, markets, total_market_cap, total_volume, market_cap_percentage, market_cap_change_percentage_24h_usd, updated_at } = response.data;

        console.log('Datos obtenidos de la API:', {
            active_cryptocurrencies,
            upcoming_icos,
            ongoing_icos,
            ended_icos,
            markets,
            total_market_cap,
            total_volume,
            market_cap_percentage,
            market_cap_change_percentage_24h_usd,
            updated_at
        });

        if (active_cryptocurrencies === null || upcoming_icos === null || ongoing_icos === null || ended_icos === null || markets === null || total_market_cap === null || total_volume === null || market_cap_percentage === null || market_cap_change_percentage_24h_usd === null || updated_at === null) {
            throw new Error('Los datos obtenidos de la API son nulos o incompletos');
        }

        const serializedTotalMarketCap = JSON.stringify(total_market_cap);
        const serializedTotalVolume = JSON.stringify(total_volume);
        const serializedMarketCapPercentage = JSON.stringify(market_cap_percentage);

        await CryptoMarketDatacrypto.upsert({
            active_cryptocurrencies,
            upcoming_icos,
            ongoing_icos,
            ended_icos,
            markets,
            total_market_cap: serializedTotalMarketCap,
            total_volume: serializedTotalVolume,
            market_cap_percentage: serializedMarketCapPercentage,
            market_cap_change_percentage_24h_usd,
            updated_at
        });

        console.log('Crypto Market data updated successfully.');
    } catch (error) {
        console.error('Error updating Crypto Market data:', error.message);
        throw new Error('Error updating Crypto Market data');
    }
}


exports.updateCryptoMarketData = async (req, res) => {
    try {
        await fetchDataAndStoreInDatabase();
        res.status(200).json({ message: 'Datos de Crypto Market Data actualizados correctamente.' });
    } catch (error) {
        console.error('Error al actualizar los datos de Crypto Market Data:', error.message);
        if (error.response && error.response.status === 404) {
            res.status(404).json({ error: 'No se encontraron datos para actualizar' });
        } else if (error.response && error.response.status === 429) {
            res.status(429).json({ error: 'Demasiadas solicitudes, inténtalo de nuevo más tarde' });
        } else {
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
};

exports.getCryptoMarketData = async (req, res) => {
    try {
        const cryptomarketdataData = await CryptoMarketDatacrypto.findOne();
        if (!cryptomarketdataData) {
            return res.status(404).json({ error: 'No se encontraron datos para Crypto Market Data' });
        }
        res.json(cryptomarketdataData);
    } catch (error) {
        console.error('Error al obtener la cotización de Crypto Market Data:', error.message);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};