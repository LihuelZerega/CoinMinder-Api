const { DataTypes } = require('sequelize');

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