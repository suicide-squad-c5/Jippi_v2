const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const { customers } = require("./models");
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

// const user = await customers.findByid(id);
// if(user === null) {
//   console.log('Not found!');
// }else{
//   console.log(user instanceof customers)
// }

module.exports = { Customer, user };
