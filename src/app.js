require('./db');
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const findMyCarRoutes = require('./routes/findmycarformRoutes');
const saleFormRoutes = require('./routes/saleformRoutes');
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/carRoutes')
const employmentFormRoutes = require('./routes/employmentformRoutes')
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);
app.name = 'BULLSWAP';
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));

app.use(express.json());
app.use('/api/employmentform', employmentFormRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = app;