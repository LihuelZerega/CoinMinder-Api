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

exports.getCRYPTO = async (req, res) => {
    try {
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
