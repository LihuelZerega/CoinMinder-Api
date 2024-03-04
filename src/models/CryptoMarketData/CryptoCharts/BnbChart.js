const { DataTypes } = require('sequelize');

module.exports = (sequelize, Sequelize) => {
  const CryptoBnbChart = sequelize.define('CryptoBnbChart', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC,
      allowNull: false
    }
  });

  return CryptoBnbChart;
};