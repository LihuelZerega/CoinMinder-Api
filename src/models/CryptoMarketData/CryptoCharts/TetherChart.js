const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const CryptoTetherChart = sequelize.define('CryptoTetherChart', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  });

  return CryptoTetherChart;
};