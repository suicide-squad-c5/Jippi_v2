const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const sequelize = new Sequelize("sqlite::memory");

const companies = sequelize.define(
  "company",
  {
    companyName: DataTypes.STRING,
    companyEmail: DataTypes.STRING,
    companyPassword: DataTypes.STRING,
    avatar: DataTypes.STRING,
    location: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER,
  },
  {
    tableName: "company",
  }
);

module.exports = companies;
