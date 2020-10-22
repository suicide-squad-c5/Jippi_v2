// const Sequelize = require("sequelize");
// var DataTypes = require("sequelize/lib/data-types");
// const sequelize = new Sequelize("sqlite::memory");

module.exports = (sequelize, Sequelize) => {
  const Item = sequelize.define("Items", {
    itemName: Sequelize.STRING,
    itemPrice: Sequelize.INTEGER,
    itemDescription: Sequelize.STRING,
    itemImage: Sequelize.STRING,
    itemRating: Sequelize.INTEGER,
    itemCompany: Sequelize.INTEGER,
    itemCategory: Sequelize.STRING,
    itemKind: Sequelize.STRING,
  });
  return Item;
};

