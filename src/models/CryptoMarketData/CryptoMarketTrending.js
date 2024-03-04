const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CryptoMarketTrendingData = sequelize.define("CryptoMarketTrendingData", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  thumb: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  small: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  large: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price_btc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  market_cap: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  market_cap_btc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  market_cap_rank: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_volume: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  total_volume_btc: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sparkline: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'cryptomarkettrendingdatas'
});

return CryptoMarketTrendingData;
};
