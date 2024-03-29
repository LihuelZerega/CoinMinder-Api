const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const CryptoSolanaChart = sequelize.define('CryptoSolanaChart', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  });

  return CryptoSolanaChart;
};