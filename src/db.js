require("dotenv").config();
const { Sequelize } = require("sequelize");
const defineUser = require("./models/user");
const FindMyCarFormModel = require("./models/findmycarform")
const SaleFormModel = require("./models/saleform")
const CarModel = require("./models/car")
const EmploymentFormModel = require("./models/employmentform")


const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const User = defineUser(sequelize);
const FindMyCarForm = FindMyCarFormModel(sequelize)
const SaleForm = SaleFormModel(sequelize)
const Car = CarModel(sequelize)
const EmploymentForm = EmploymentFormModel(sequelize)


module.exports = {
  sequelize,
  User,
  Car,
  FindMyCarForm,
  EmploymentForm,
  SaleForm,
};