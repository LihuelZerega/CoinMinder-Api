const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../db');

module.exports = (sequelize, Sequelize) => {
  const CryptoEthereumChart = sequelize.define('CryptoEthereumChart', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  });

  return CryptoEthereumChart;
};