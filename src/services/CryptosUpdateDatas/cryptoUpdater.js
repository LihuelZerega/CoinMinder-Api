const { updateAvalancheData } = require('./avalancheUpdater');
const { updateBinancebitcoinData } = require('./binancebitcoinUpdater');
const { updateBitcoinData } = require('./bitcoinUpdater');
const { updateBitcoincashData } = require('./bitcoincashUpdater');
const { updateCardanoData } = require('./updateCARDANOData');
const { updateChainlinkData } = require('./updateCHAINLINKData');
const { updateCosmoshubData } = require('./updateCOSMOSHUBData');
const { updateDaiData } = require('./updateDAIData');
const { updateDogecoinData } = require('./updateDOGECOINData');
const { updateEthereumData } = require('./updateETHEREUMData');
const { updateInternetcomputerData } = require('./updateINTERNETCOMPUTERData');
const { updateLeotokenData } = require('./updateLEOTOKENData');
const { updateLidostackedetherData } = require('./updateLIDOSTAKEDETHERData');
const { updateLitecoinData } = require('./updateLITECOINData');
const { updatePolkadotData } = require('./updatePOLKADOTData');
const { updatePolygonData } = require('./updatePOLYGONData');
const { updateRippleData } = require('./updateRIPPLEData');
const { updateShibainuData } = require('./updateSHIBAINUData');
const { updateSolanaData } = require('./updateSOLANAData');
const { updateTetherData } = require('./updateTETHERData');
const { updateToincoinData } = require('./updateTOINCOINData');
const { updateTronData } = require('./updateTRONData');
const { updateUniswapData } = require('./updateUNISWAPData');
const { updateUsdcData } = require('./updateUSDCData');
const { updateWrappedbitcoinData } = require('./updateWRAPPEDBITCOINData');

async function updateLotCryptocurrencies(lote) {
    try {
        for (const cryptoUpdater of lote) {
            await cryptoUpdater();
        }
    } catch (error) {
        console.error(`Error al actualizar el lote de criptomonedas: ${error.message}`);
    }
}

const lotsCryptocurrencies = [
    [updateBitcoinData, updateEthereumData, updateTetherData],
    [updateBinancebitcoinData, updateSolanaData, updateRippleData],
    [updateLidostackedetherData, updateUsdcData, updateCardanoData],
    [updateAvalancheData, updateTronData, updateDogecoinData],
    [updateChainlinkData, updatePolkadotData, updatePolygonData],
    [updateWrappedbitcoinData, updateToincoinData, updateInternetcomputerData],
    [updateShibainuData, updateUniswapData, updateLitecoinData],
    [updateBitcoincashData, updateDaiData, updateLeotokenData],
    [updateCosmoshubData]
];

function startCryptoUpdates() {
    let tiempo = 3 * 60 * 1000;
    for (const lote of lotsCryptocurrencies) {
        setTimeout(() => {
            updateLotCryptocurrencies(lote);
        }, tiempo);
        tiempo += 3 * 60 * 1000;
    }
}

module.exports = { startCryptoUpdates };
