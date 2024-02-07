const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db");

module.exports = (sequelize) => {
const Amz = sequelize.define("amz", {
    c: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    d: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dp: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    h: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    l: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    o: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    pc: {
      type: DataTypes.FLOAT,
      allowNull: false
        }
    });
    return Amz;
};