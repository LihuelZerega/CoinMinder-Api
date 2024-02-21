require("dotenv").config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });


//Cryptos
// const AvalancheCryptoModel = require("./models/CryptoCurrenciesModels/Avalanche");
// const BinanceBitcoinCryptoModel = require("./models/CryptoCurrenciesModels/BinanceBitcoin");
// const BitcoinCryptoModel = require("./models/CryptoCurrenciesModels/Bitcoin");
// const BitcoinCashCryptoModel = require("./models/CryptoCurrenciesModels/BitcoinCash");
// const CardanoCryptoModel = require("./models/CryptoCurrenciesModels/Cardano");
// const ChainLinkCryptoModel = require("./models/CryptoCurrenciesModels/ChainLink");
// const CosmosHubCryptoModel = require("./models/CryptoCurrenciesModels/CosmosHub");
// const DaiCryptoModel = require("./models/CryptoCurrenciesModels/Dai");
// const DogeCoinCryptoModel = require("./models/CryptoCurrenciesModels/DogeCoin");
// const EthereumCryptoModel = require("./models/CryptoCurrenciesModels/Ethereum");
// const InternetComputerCryptoModel = require("./models/CryptoCurrenciesModels/InternetComputer");
// const LeoTokenCryptoModel = require("./models/CryptoCurrenciesModels/LeoToken");
// const LidoStakedEtherCryptoModel = require("./models/CryptoCurrenciesModels/LidoStakedEther");
// const LiteCoinCryptoModel = require("./models/CryptoCurrenciesModels/LiteCoin");
// const PolkadotCryptoModel = require("./models/CryptoCurrenciesModels/Polkadot");
// const PolygonCryptoModel = require("./models/CryptoCurrenciesModels/Polygon");
// const RippleCryptoModel = require("./models/CryptoCurrenciesModels/Ripple");
// const ShibaInuCryptoModel = require("./models/CryptoCurrenciesModels/ShibaInu");
// const SolanaCryptoModel = require("./models/CryptoCurrenciesModels/Solana");
// const TetherCryptoModel = require("./models/CryptoCurrenciesModels/Tether");  
// const ToincoinCryptoModel = require("./models/CryptoCurrenciesModels/Toincoin");
// const TronCryptoModel = require("./models/CryptoCurrenciesModels/Tron");
// const UniSwapCryptoModel = require("./models/CryptoCurrenciesModels/UniSwap");
// const UsdcCryptoModel = require("./models/CryptoCurrenciesModels/Usdc");
// const WrappedBitcoinCryptoModel = require("./models/CryptoCurrenciesModels/WrappedBitcoin");

// const AVALANCHEcrypto = AvalancheCryptoModel(sequelize);
// const BINANCEBITCOINcrypto = BinanceBitcoinCryptoModel(sequelize);
// const BITCOINcrypto = BitcoinCryptoModel(sequelize);
// const BITCOINCASHcrypto = BitcoinCashCryptoModel(sequelize);
// const CARDANOcrypto = CardanoCryptoModel(sequelize);
// const CHAINLINKcrypto = ChainLinkCryptoModel(sequelize);
// const COSMOSHUBcrypto = CosmosHubCryptoModel(sequelize);
// const DAIcrypto = DaiCryptoModel(sequelize);
// const DOGECOINcrypto = DogeCoinCryptoModel(sequelize);
// const ETHEREUMcrypto = EthereumCryptoModel(sequelize);
// const INTERNETCOMPUTERcrypto = InternetComputerCryptoModel(sequelize);
// const LEOTOKENcrypto = LeoTokenCryptoModel(sequelize);
// const LIDOSTAKEDcrypto = LidoStakedEtherCryptoModel(sequelize);
// const LITECOINcrypto = LiteCoinCryptoModel(sequelize);
// const POLKADOTcrypto = PolkadotCryptoModel(sequelize);
// const POLYGONcrypto = PolygonCryptoModel(sequelize);
// const RIPPLEcrypto = RippleCryptoModel(sequelize);
// const SHIBAINUcrypto = ShibaInuCryptoModel(sequelize);
// const SOLANAcrypto = SolanaCryptoModel(sequelize);
// const TETHERcrypto = TetherCryptoModel(sequelize);
// const TOINCOINcrypto = ToincoinCryptoModel(sequelize);
// const TRONcrypto = TronCryptoModel(sequelize);
// const UNISWAPcrypto = UniSwapCryptoModel(sequelize);
// const USDCcrypto = UsdcCryptoModel(sequelize);
// const WRAPPEDBITCOINcrypto = WrappedBitcoinCryptoModel(sequelize);

// Crypto Market Data
const CryptoMarketDataModel = require("./models/CryptoMarketData/CryptoMarketData");
const CryptoMarketDatacrypto = CryptoMarketDataModel(sequelize);

//Stocks
// const AapStockModel = require("./models/StocksModels/AAP");
// const AaplStockModel = require("./models/StocksModels/AAPL")
// const AmdStockModel = require("./models/StocksModels/AMD");
// const AmzStockModel = require("./models/StocksModels/AMZ");
// const AmznStockModel = require("./models/StocksModels/AMZN");
// const BaStockModel = require("./models/StocksModels/BA");
// const BacStockModel = require("./models/StocksModels/BAC");
// const CscoStockModel = require("./models/StocksModels/CSCO");
// const DisStockModel = require("./models/StocksModels/DIS");
// const FbStockModel = require("./models/StocksModels/FB");
// const GeStockModel = require("./models/StocksModels/GE");
// const GooglStockModel = require("./models/StocksModels/GOOGL");
// const GsStockModel = require("./models/StocksModels/GS");
// const IbmStockModel = require("./models/StocksModels/IBM");
// const IntcStockModel = require("./models/StocksModels/INTC");
// const JpmStockModel = require("./models/StocksModels/JPM");
// const KoStockModel = require("./models/StocksModels/KO");
// const McdStockModel = require("./models/StocksModels/MCD");
// const MsStockModel = require("./models/StocksModels/MS");
// const MsftStockModel = require("./models/StocksModels/MSFT");
// const NflxStockModel = require("./models/StocksModels/NFLX");
// const NvdaStockModel = require("./models/StocksModels/NVDA");
// const PepStockModel = require("./models/StocksModels/PEP");
// const PyplStockModel = require("./models/StocksModels/PYPL");
// const TStockModel = require("./models/StocksModels/T");
// const TslaStockModel = require("./models/StocksModels/TSLA");
// const VzStockModel = require("./models/StocksModels/VZ");
// const WmtStockModel = require("./models/StocksModels/WMT");

// const AAPstock = AapStockModel(sequelize);
// const AAPLstock = AaplStockModel(sequelize);
// const AMDstock = AmdStockModel(sequelize);
// const AMZstock = AmzStockModel(sequelize);
// const AMZNstock = AmznStockModel(sequelize);
// const BAstock = BaStockModel(sequelize);
// const BACstock = BacStockModel(sequelize);
// const CSCOstock = CscoStockModel(sequelize);
// const DISstock = DisStockModel(sequelize);
// const FBstock = FbStockModel(sequelize);
// const GEstock = GeStockModel(sequelize);
// const GOOGLstock = GooglStockModel(sequelize);
// const GSstock = GsStockModel(sequelize);
// const IBMstock = IbmStockModel(sequelize);
// const INTCstock = IntcStockModel(sequelize);
// const JPMstock = JpmStockModel(sequelize);
// const KOstock = KoStockModel(sequelize);
// const MCDstock = McdStockModel(sequelize);
// const MSstock = MsStockModel(sequelize);
// const MSFTstock = MsftStockModel(sequelize);
// const NFLXstock = NflxStockModel(sequelize);
// const NVDAstock = NvdaStockModel(sequelize);
// const PEPstock = PepStockModel(sequelize);
// const PYPLstock = PyplStockModel(sequelize);
// const Tstock = TStockModel(sequelize);
// const TSLAstock = TslaStockModel(sequelize);
// const VZstock = VzStockModel(sequelize);
// const WMTstock = WmtStockModel(sequelize);

sequelize.sync();

module.exports = {
  sequelize,
  // AAPstock,
  // AAPLstock,
  // AMDstock,
  // AMZstock,
  // AMZNstock,
  // BAstock,
  // BACstock,
  // CSCOstock,
  // DISstock,
  // FBstock,
  // GEstock,
  // GOOGLstock,
  // GSstock,
  // IBMstock,
  // INTCstock,
  // JPMstock,
  // KOstock,
  // MCDstock,
  // MSstock,
  // MSFTstock,
  // NFLXstock,
  // NVDAstock,
  // PEPstock,
  // PYPLstock,
  // Tstock,
  // TSLAstock,
  // VZstock,
  // WMTstock,
  // AVALANCHEcrypto,
  // BINANCEBITCOINcrypto,
  // BITCOINcrypto,
  // BITCOINCASHcrypto,
  // CARDANOcrypto,
  // CHAINLINKcrypto,
  // COSMOSHUBcrypto,
  // DAIcrypto,
  // DOGECOINcrypto,
  // ETHEREUMcrypto,
  // INTERNETCOMPUTERcrypto,
  // LEOTOKENcrypto,
  // LIDOSTAKEDcrypto,
  // LITECOINcrypto,
  // POLKADOTcrypto,
  // POLYGONcrypto,
  // RIPPLEcrypto,
  // SHIBAINUcrypto,
  // SOLANAcrypto,
  // TETHERcrypto,
  // TOINCOINcrypto,
  // TRONcrypto,
  // UNISWAPcrypto,
  // USDCcrypto,
  // WRAPPEDBITCOINcrypto,
  CryptoMarketDatacrypto,
};
