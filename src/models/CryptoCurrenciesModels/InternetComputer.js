const { DataTypes } = require('sequelize');
const { sequelize } = require('../../db');

module.exports = (sequelize) => {
  const InternetComputer = sequelize.define("internetcomputer", {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    current_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    market_cap: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    market_cap_rank: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    fully_diluted_valuation: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_volume: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    high_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    low_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price_change_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    price_change_percentage_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    market_cap_change_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    market_cap_change_percentage_24h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    circulating_supply: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    total_supply: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    max_supply: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ath: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ath_change_percentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    ath_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    atl: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    atl_change_percentage: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    atl_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    roi: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    last_updated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
  
  return InternetComputer;
};
