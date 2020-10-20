const Sequelize = require("sequelize");
var DataTypes = require("sequelize/lib/data-types");
const sequelize = new Sequelize("sqlite::memory");

const Item = sequelize.define(
  "Item",
  {
    itemName: DataTypes.STRING,
    itemPrice: DataTypes.INTEGER,
    itemDescription: DataTypes.STRING,
    itemImage: DataTypes.STRING,
    itemRating: DataTypes.INTEGER,
    itemCompany: DataTypes.INTEGER,
  },
  {
    tableName: "item_table", // this will define the table's name
  }
);

module.exports = Item;
