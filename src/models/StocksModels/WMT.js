const { DataTypes } = require("sequelize");
const { sequelize } = require("../../db");

module.exports = (sequelize) => {
const Wmt = sequelize.define("wmt", {
    c: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    d: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    dp: {
      type: DataTypes.FLOAT,
      allowNull: false
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
    return Wmt;
};