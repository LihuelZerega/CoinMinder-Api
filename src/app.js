require('./db');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

//Stocks imports
const aapRoutes = require('./routes/Stocks/aapRoute');
const aaplRoutes = require('./routes/Stocks/aaplRoute');
const amdRoutes = require('./routes/Stocks/amdRoute');
const amzRoutes = require('./routes/Stocks/amzRoute');
const amznRoutes = require('./routes/Stocks/amznRoute');
const baRoutes = require('./routes/Stocks/baRoute');
const bacRoutes = require('./routes/Stocks/bacRoute');
const cscoRoutes = require('./routes/Stocks/cscoRoute');
const disRoutes = require('./routes/Stocks/disRoute');
const fbRoutes = require('./routes/Stocks/fbRoute');
const geRoutes = require('./routes/Stocks/geRoute');
const googlRoutes = require('./routes/Stocks/googlRoute');
const gsRoutes = require('./routes/Stocks/gsRoute');
const ibmRoutes = require('./routes/Stocks/ibmRoute');
const intcRoutes = require('./routes/Stocks/intcRoute');
const jpmRoutes = require('./routes/Stocks/jpmRoute');
const koRoutes = require('./routes/Stocks/koRoute');
const mcdRoutes = require('./routes/Stocks/mcdRoute');
const msRoutes = require('./routes/Stocks/msRoute');
const msftRoutes = require('./routes/Stocks/msftRoute');
const nflxRoutes = require('./routes/Stocks/nflxRoute');
const nvdaRoutes = require('./routes/Stocks/nvdaRoute');
const pepRoutes = require('./routes/Stocks/pepRoute');
const pyplRoutes = require('./routes/Stocks/pyplRoute');
const tRoutes = require('./routes/Stocks/tRoute');
const tslaRoutes = require('./routes/Stocks/tslaRoute');
const vzRoutes = require('./routes/Stocks/vzRoute');
const wmtRoutes = require('./routes/Stocks/wmtRoute');

//Cryptos Imports
const AvalancheRoutes = require('./routes/Crypto/AvalancheRoute')
const BinanceBitcoinRoutes = require('./routes/Crypto/BinanceBitcoinRoute')
const BitcoinRoutes = require('./routes/Crypto/BitcoinRoute')
const BitcoinCashRoutes = require('./routes/Crypto/BitcoinCashRoute')
const CardanoRoutes = require('./routes/Crypto/CardanoRoute')
const ChainLinkRoutes = require('./routes/Crypto/ChainLinkRoute')
const CosmosHubRoutes = require('./routes/Crypto/CosmosHubRoute')
const DaiRoutes = require('./routes/Crypto/DaiRoute')
const DogeCoinRoutes = require('./routes/Crypto/DogeCoinRoute')
const EthereumRoutes = require('./routes/Crypto/EthereumRoute')
const InternetComputerRoutes = require('./routes/Crypto/InternetComputerRoute')
const LeoTokenRoutes = require('./routes/Crypto/LeoTokenRoute')
const LidoStakedEtherRoutes = require('./routes/Crypto/LidoStakedEtherRoute')
const LiteCoinRoutes = require('./routes/Crypto/LiteCoinRoute')
const PolkadotRoutes = require('./routes/Crypto/PolkadotRoute')
const PolygonRoutes = require('./routes/Crypto/PolygonRoute')
const RippleRoutes = require('./routes/Crypto/RippleRoute')
const ShibaInuRoutes = require('./routes/Crypto/ShibaInuRoute')
const SolanaRoutes = require('./routes/Crypto/SolanaRoute')
const TetherRoutes = require('./routes/Crypto/TetherRoute')
const ToincoinRoutes = require('./routes/Crypto/ToincoinRoute')
const TronRoutes = require('./routes/Crypto/TronRoute')
const UniSwapRoutes = require('./routes/Crypto/UniSwapRoute')
const UsdcRoutes = require('./routes/Crypto/UsdcRoute')
const WrappedBitcoinRoutes = require('./routes/Crypto/WrappedBitcoinRoute')

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' || 'https://www.thunderclient.com',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: Infinity
});


app.use(limiter);
app.name = 'BULLSWAP';
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.json());

// Stocks endpoints
app.use('/api/stock/aap', aapRoutes);
app.use('/api/stock/aapl', aaplRoutes);
app.use('/api/stock/amd', amdRoutes);
app.use('/api/stock/amz', amzRoutes);
app.use('/api/stock/amzn', amznRoutes);
app.use('/api/stock/ba', baRoutes);
app.use('/api/stock/bac', bacRoutes);
app.use('/api/stock/csco', cscoRoutes);
app.use('/api/stock/dis', disRoutes);
app.use('/api/stock/fb', fbRoutes);
app.use('/api/stock/ge', geRoutes);
app.use('/api/stock/googl', googlRoutes);
app.use('/api/stock/gs', gsRoutes);
app.use('/api/stock/ibm', ibmRoutes);
app.use('/api/stock/intc', intcRoutes);
app.use('/api/stock/jpm', jpmRoutes);
app.use('/api/stock/ko', koRoutes);
app.use('/api/stock/mcd', mcdRoutes);
app.use('/api/stock/ms', msRoutes);
app.use('/api/stock/msft', msftRoutes);
app.use('/api/stock/nflx', nflxRoutes);
app.use('/api/stock/nvda', nvdaRoutes);
app.use('/api/stock/pep', pepRoutes);
app.use('/api/stock/pypl', pyplRoutes);
app.use('/api/stock/t', tRoutes);
app.use('/api/stock/tsla', tslaRoutes);
app.use('/api/stock/vz', vzRoutes);
app.use('/api/stock/wmt', wmtRoutes);

// Cryptos endpoints
app.use('/api/crypto/avalanche', AvalancheRoutes);
app.use('/api/crypto/binance-bitcoin', BinanceBitcoinRoutes);
app.use('/api/crypto/bitcoin', BitcoinRoutes);
app.use('/api/crypto/bitcoin-cash', BitcoinCashRoutes);
app.use('/api/crypto/cardano', CardanoRoutes);
app.use('/api/crypto/chainlink', ChainLinkRoutes);
app.use('/api/crypto/cosmos-hub', CosmosHubRoutes);
app.use('/api/crypto/dai', DaiRoutes);
app.use('/api/crypto/dogecoin', DogeCoinRoutes);
app.use('/api/crypto/ethereum', EthereumRoutes);
app.use('/api/crypto/internet-computer', InternetComputerRoutes);
app.use('/api/crypto/leo-token', LeoTokenRoutes);
app.use('/api/crypto/lido-staked-ether', LidoStakedEtherRoutes);
app.use('/api/crypto/litecoin', LiteCoinRoutes);
app.use('/api/crypto/polkadot', PolkadotRoutes);
app.use('/api/crypto/polygon', PolygonRoutes);
app.use('/api/crypto/ripple', RippleRoutes);
app.use('/api/crypto/shiba-inu', ShibaInuRoutes);
app.use('/api/crypto/solana', SolanaRoutes);
app.use('/api/crypto/tether', TetherRoutes);
app.use('/api/crypto/toincoin', ToincoinRoutes);
app.use('/api/crypto/tron', TronRoutes);
app.use('/api/crypto/uniswap', UniSwapRoutes);
app.use('/api/crypto/usdc', UsdcRoutes);
app.use('/api/crypto/wrapped-bitcoin', WrappedBitcoinRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;