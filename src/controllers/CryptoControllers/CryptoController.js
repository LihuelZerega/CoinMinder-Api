const { AVALANCHEcrypto,
        BINANCEBITCOINcrypto,
        BITCOINcrypto,
        BITCOINCASHcrypto,
        CARDANOcrypto,
        CHAINLINKcrypto,
        COSMOSHUBcrypto,
        DAIcrypto,
        DOGECOINcrypto,
        ETHEREUMcrypto,
        INTERNETCOMPUTERcrypto,
        LEOTOKENcrypto,
        LIDOSTAKEDcrypto,
        LITECOINcrypto,
        POLKADOTcrypto,
        POLYGONcrypto,
        RIPPLEcrypto,
        SHIBAINUcrypto,
        SOLANAcrypto,
        TETHERcrypto,
        UNISWAPcrypto,
        USDCcrypto,
        WRAPPEDBITCOINcrypto
    } = require('../../db');

const { updateAvalancheData } = require('../../services/CryptosUpdateDatas/avalancheUpdater');
const { updateBinancebitcoinData } = require('../../services/CryptosUpdateDatas/binancebitcoinUpdater');
const { updateBitcoinData } = require('../../services/CryptosUpdateDatas/bitcoinUpdater');
const { updateBitcoincashData } = require('../../services/CryptosUpdateDatas/bitcoincashUpdater');
const { updateCardanoData } = require('../../services/CryptosUpdateDatas/updateCARDANOData');
const { updateChainlinkData } = require('../../services/CryptosUpdateDatas/updateCHAINLINKData');
const { updateCosmoshubData } = require('../../services/CryptosUpdateDatas/updateCOSMOSHUBData');
const { updateDaiData } = require('../../services/CryptosUpdateDatas/updateDAIData');
const { updateDogecoinData } = require('../../services/CryptosUpdateDatas/updateDOGECOINData');
const { updateEthereumData } = require('../../services/CryptosUpdateDatas/updateETHEREUMData');
const { updateInternetcomputerData } = require('../../services/CryptosUpdateDatas/updateINTERNETCOMPUTERData');
const { updateLeotokenData } = require('../../services/CryptosUpdateDatas/updateLEOTOKENData');
const { updateLidostackedetherData } = require('../../services/CryptosUpdateDatas/updateLIDOSTAKEDETHERData');
const { updateLitecoinData } = require('../../services/CryptosUpdateDatas/updateLITECOINData');
const { updatePolkadotData } = require('../../services/CryptosUpdateDatas/updatePOLKADOTData');
const { updatePolygonData } = require('../../services/CryptosUpdateDatas/updatePOLYGONData');
const { updateRippleData } = require('../../services/CryptosUpdateDatas/updateRIPPLEData');
const { updateShibainuData } = require('../../services/CryptosUpdateDatas/updateSHIBAINUData');
const { updateSolanaData } = require('../../services/CryptosUpdateDatas/updateSOLANAData');
const { updateTetherData } = require('../../services/CryptosUpdateDatas/updateTETHERData');
const { updateToincoinData } = require('../../services/CryptosUpdateDatas/updateTOINCOINData');
const { updateTronData } = require('../../services/CryptosUpdateDatas/updateTRONData');
const { updateUniswapData } = require('../../services/CryptosUpdateDatas/updateUNISWAPData');
const { updateUsdcData } = require('../../services/CryptosUpdateDatas/updateUSDCData');
const { updateWrappedbitcoinData } = require('../../services/CryptosUpdateDatas/updateWRAPPEDBITCOINData');


exports.getCRYPTO = async (req, res) => {
    try {
        await updateAvalancheData();
        await updateBinancebitcoinData();
        await updateBitcoinData();
        await updateBitcoincashData();
        await updateCardanoData();
        await updateChainlinkData();
        await updateCosmoshubData();
        await updateDaiData();
        await updateDogecoinData();
        await updateEthereumData();
        await updateInternetcomputerData();
        await updateLeotokenData();
        await updateLidostackedetherData();
        await updateLitecoinData();
        await updatePolkadotData();
        await updatePolygonData();
        await updateRippleData();
        await updateShibainuData();
        await updateSolanaData();
        await updateTetherData();
        await updateToincoinData();
        await updateTronData();
        await updateUniswapData();
        await updateUsdcData();
        await updateWrappedbitcoinData();

        let avalancheData = await AVALANCHEcrypto.findOne();
        let binancebitcoinData = await BINANCEBITCOINcrypto.findOne();
        let bitcoinData = await BITCOINcrypto.findOne();
        let bitcoincashData = await BITCOINCASHcrypto.findOne();
        let cardanonData = await CARDANOcrypto.findOne();
        let chainlinkData = await CHAINLINKcrypto.findOne();
        let cosmoshubData = await COSMOSHUBcrypto.findOne();
        let daiData = await DAIcrypto.findOne();
        let dogecoinData = await DOGECOINcrypto.findOne();
        let ethereumData = await ETHEREUMcrypto.findOne();
        let internetcomputerData = await INTERNETCOMPUTERcrypto.findOne();
        let leotokenData = await LEOTOKENcrypto.findOne();
        let lidostakedData = await LIDOSTAKEDcrypto.findOne();
        let litecoinData = await LITECOINcrypto.findOne();
        let polkadotData = await POLKADOTcrypto.findOne();
        let polygonData = await POLYGONcrypto.findOne();
        let rippleData = await RIPPLEcrypto.findOne();
        let shibainuData = await SHIBAINUcrypto.findOne();
        let solanaData = await SOLANAcrypto.findOne();
        let tetherData = await TETHERcrypto.findOne();
        let uniswapData = await UNISWAPcrypto.findOne();
        let usdcData = await USDCcrypto.findOne();
        let wrappedbitcoinData = await WRAPPEDBITCOINcrypto.findOne();
        
        const responseData = {
            avalancheData,
            bitcoinData,
            binancebitcoinData,
            bitcoincashData,
            cardanonData,
            chainlinkData,
            cosmoshubData,
            daiData, 
            dogecoinData,
            ethereumData,
            internetcomputerData, 
            leotokenData,
            lidostakedData,
            litecoinData,
            polkadotData,
            polygonData,
            rippleData,
            shibainuData,
            solanaData,
            tetherData,
            uniswapData,
            usdcData,
            wrappedbitcoinData
        };

        res.json(responseData);
    } catch (error) {
        console.error('Error al obtener la cotización:', error.message);
        res.status(500).json({ error: 'Error al obtener la cotización' });
    }
};
