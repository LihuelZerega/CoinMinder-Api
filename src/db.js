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

const AapStockModel = require("./models/AAP");
const AaplStockModel = require("./models/AAPL")
const AmdStockModel = require("./models/AMD");
const AmzStockModel = require("./models/AMZ");
const AmznStockModel = require("./models/AMZN");
const BaStockModel = require("./models/BA");
const BacStockModel = require("./models/BAC");
const CscoStockModel = require("./models/CSCO");
const DisStockModel = require("./models/DIS");
const FbStockModel = require("./models/FB");
const GeStockModel = require("./models/GE");
const GooglStockModel = require("./models/GOOGL");
const GsStockModel = require("./models/GS");
const IbmStockModel = require("./models/IBM");
const IntcStockModel = require("./models/INTC");
const JpmStockModel = require("./models/JPM");
const KoStockModel = require("./models/KO");
const McdStockModel = require("./models/MCD");
const MsStockModel = require("./models/MS");
const MsftStockModel = require("./models/MSFT");
const NflxStockModel = require("./models/NFLX");
const NvdaStockModel = require("./models/NVDA");
const PepStockModel = require("./models/PEP");
const PyplStockModel = require("./models/PYPL");
const TStockModel = require("./models/T");
const TslaStockModel = require("./models/TSLA");
const VzStockModel = require("./models/VZ");
const WmtStockModel = require("./models/WMT");

const AAPstock = AapStockModel(sequelize);
const AAPLstock = AaplStockModel(sequelize);
const AMDstock = AmdStockModel(sequelize);
const AMZstock = AmzStockModel(sequelize);
const AMZNstock = AmznStockModel(sequelize);
const BAstock = BaStockModel(sequelize);
const BACstock = BacStockModel(sequelize);
const CSCOstock = CscoStockModel(sequelize);
const DISstock = DisStockModel(sequelize);
const FBstock = FbStockModel(sequelize);
const GEstock = GeStockModel(sequelize);
const GOOGLstock = GooglStockModel(sequelize);
const GSstock = GsStockModel(sequelize);
const IBMstock = IbmStockModel(sequelize);
const INTCstock = IntcStockModel(sequelize);
const JPMstock = JpmStockModel(sequelize);
const KOstock = KoStockModel(sequelize);
const MCDstock = McdStockModel(sequelize);
const MSstock = MsStockModel(sequelize);
const MSFTstock = MsftStockModel(sequelize);
const NFLXstock = NflxStockModel(sequelize);
const NVDAstock = NvdaStockModel(sequelize);
const PEPstock = PepStockModel(sequelize);
const PYPLstock = PyplStockModel(sequelize);
const Tstock = TStockModel(sequelize);
const TSLAstock = TslaStockModel(sequelize);
const VZstock = VzStockModel(sequelize);
const WMTstock = WmtStockModel(sequelize);

sequelize.sync();

module.exports = {
  sequelize,
  AAPstock,
  AAPLstock,
  AMDstock,
  AMZstock,
  AMZNstock,
  BAstock,
  BACstock,
  CSCOstock,
  DISstock,
  FBstock,
  GEstock,
  GOOGLstock,
  GSstock,
  IBMstock,
  INTCstock,
  JPMstock,
  KOstock,
  MCDstock,
  MSstock,
  MSFTstock,
  NFLXstock,
  NVDAstock,
  PEPstock,
  PYPLstock,
  Tstock,
  TSLAstock,
  VZstock,
  WMTstock,
};
