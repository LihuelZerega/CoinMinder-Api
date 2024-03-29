const axios = require('axios');
const { CryptoCurrencycrypto, sequelize } = require('../../db');

async function deleteCryptocurrencies() {
    try {
        await CryptoCurrencycrypto.destroy({ where: {} });
        console.log('Datos de criptomonedas eliminados correctamente.');
    } catch (error) {
        console.error('Error al eliminar los datos de criptomonedas:', error);
        throw error;
    }
}

async function updateCryptocurrencies() {
    try {
        await CryptoCurrencycrypto.destroy({ where: {} });

        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
                vs_currency: 'usd',
                per_page: 250,
                page: 1,
            },
        });

        if (response.data && response.data.length > 0) {
            const cryptocurrenciesData = response.data.map(cryptoData => {
                return {
                    symbol: cryptoData.symbol,
                    name: cryptoData.name,
                    image: cryptoData.image,
                    current_price: cryptoData.current_price,
                    market_cap: cryptoData.market_cap,
                    market_cap_rank: cryptoData.market_cap_rank,
                    fully_diluted_valuation: cryptoData.fully_diluted_valuation,
                    total_volume: cryptoData.total_volume,
                    high_24h: cryptoData.high_24h,
                    low_24h: cryptoData.low_24h,
                    price_change_24h: cryptoData.price_change_24h,
                    price_change_percentage_24h: cryptoData.price_change_percentage_24h,
                    market_cap_change_24h: cryptoData.market_cap_change_24h,
                    market_cap_change_percentage_24h: cryptoData.market_cap_change_percentage_24h,
                    circulating_supply: cryptoData.circulating_supply,
                    total_supply: cryptoData.total_supply,
                    max_supply: cryptoData.max_supply,
                    ath: cryptoData.ath,
                    ath_change_percentage: cryptoData.ath_change_percentage,
                    ath_date: cryptoData.ath_date,
                    atl: cryptoData.atl,
                    atl_change_percentage: cryptoData.atl_change_percentage,
                    atl_date: cryptoData.atl_date,
                    roi: cryptoData.roi,
                    last_updated: cryptoData.last_updated
                };
            });

            await CryptoCurrencycrypto.bulkCreate(cryptocurrenciesData);
        }

        console.log('Datos de criptomonedas actualizados correctamente.');
    } catch (error) {
        console.error('Error al obtener los datos de criptomonedas:', error);
        throw error;
    }
}



async function getCryptocurrencies(req, res) {
    try {

        const cryptocurrencies = await CryptoCurrencycrypto.findAll();

        res.status(200).json(cryptocurrencies);
    } catch (error) {
        console.error('Error al obtener los datos de criptomonedas:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getCurrencyById(req, res) {
    const { id } = req.params;

    try {
        const currency = await CryptoCurrencycrypto.findByPk(id);

        if (!currency) {
            return res.status(404).json({ error: 'Criptomoneda no encontrada' });
        }

        res.status(200).json(currency);
    } catch (error) {
        console.error('Error al obtener la criptomoneda por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getTopGainers(req, res) {
    try {
        const topGainers = await CryptoCurrencycrypto.findAll({
            order: [['price_change_percentage_24h', 'DESC']],
            limit: 250,
        });
        res.json(topGainers);
    } catch (error) {
        console.error('Error al obtener las criptomonedas principales:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

async function getTopLosers(req, res) {
    try {
        const topLosers = await CryptoCurrencycrypto.findAll({
            order: [['price_change_percentage_24h', 'ASC']],
            limit: 250,
        });
        res.json(topLosers);
    } catch (error) {
        console.error('Error al obtener las criptomonedas principales:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

module.exports = { deleteCryptocurrencies, updateCryptocurrencies, getCryptocurrencies, getCurrencyById, getTopGainers, getTopLosers };