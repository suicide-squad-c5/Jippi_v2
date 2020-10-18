const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const sequelize = new Sequelize("sqlite::memory");

const comapny = sequelize.define(
  "company",
  {
    companyName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
    phone_number: DataTypes.INTEGER,
  },
  {
    tableName: "company",
  }
);

module.exports = comapny;
