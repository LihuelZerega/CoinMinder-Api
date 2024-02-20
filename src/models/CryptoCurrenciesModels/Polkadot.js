const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db');

module.exports = (sequelize) => {
  const Polkadot = sequelize.define("Polkadot", {
    symbol: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    current_price: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    market_cap: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    market_cap_rank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fully_diluted_valuation: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    high_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    low_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price_change_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    price_change_percentage_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    market_cap_change_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    market_cap_change_percentage_24h: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    circulating_supply: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    total_supply: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    max_supply: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ath: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ath_change_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ath_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    atl: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    atl_change_percentage: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    atl_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    roi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'polkadots'
  });
  
  return Polkadot;
};
