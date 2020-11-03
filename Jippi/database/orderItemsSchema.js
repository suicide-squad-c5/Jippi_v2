const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const OrderItems = sequelize.define("orderItems", {
    ordeId: Sequelize.INTEGER,
    ItemId: Sequelize.INTEGER,
    amount: Sequelize.STRING,
    companyName: Sequelize.STRING,
  });
  return OrderItems;
};
