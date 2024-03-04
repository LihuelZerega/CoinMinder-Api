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
const CryptoCurrencyRoutes = require ('./routes/Crypto/CryptoCurrencyRoute')
const CryptoMarketRoutes = require('./routes/Crypto/CryptoMarketDataRoute')
const CryptoMarketTrendingRoutes = require('./routes/Crypto/CryptoMarketTrendingRoute')
const BitcoinChartRoutes = require('./routes/Crypto/CryptoChartsRoutes/BitcoinChartRoute')
const EthereumChartRoutes = require('./routes/Crypto/CryptoChartsRoutes/EthereumChartRoute')
const TetherChartRoutes = require('./routes/Crypto/CryptoChartsRoutes/TetherChartRoute')
const BnbChartRoutes = require('./routes/Crypto/CryptoChartsRoutes/BnbChartRoute')
const SolanaChartRoutes = require('./routes/Crypto/CryptoChartsRoutes/SolanaChartRoute')


const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' || 'https://www.thunderclient.com' || 'https://bull-swap-app.vercel.app',
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
app.use('/api/crypto', CryptoCurrencyRoutes)
app.use('/api/crypto/market', CryptoMarketRoutes);
app.use('/api/crypto/market/trending', CryptoMarketTrendingRoutes);
app.use('/api/crypto/bitcoin', BitcoinChartRoutes)
app.use('/api/crypto/ethereum', EthereumChartRoutes)
app.use('/api/crypto/tether', TetherChartRoutes)
app.use('/api/crypto/bnb', BnbChartRoutes)
app.use('/api/crypto/solana', SolanaChartRoutes)


app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;