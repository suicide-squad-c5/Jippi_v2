const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const sequelize = new Sequelize("sqlite::memory");

const Customer = sequelize.define(
  "Customer",
  {
    firstName: DataTypes.STRING,
    last_Name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    adress: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
  },
  {
    tableName: "Customer_table", // this will define the table's name
  }
);

module.exports = Customer;
