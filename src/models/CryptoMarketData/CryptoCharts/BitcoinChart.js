const { DataTypes } = require('sequelize');
const { sequelize } = require('../../../db');

module.exports = (sequelize, Sequelize) => {
  const CryptoBitcoinChart = sequelize.define('CryptoBitcoinChart', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  });

  return CryptoBitcoinChart;
};