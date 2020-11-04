const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const OrderItems = sequelize.define("orderItems", {
    orderId: Sequelize.STRING,
    ItemId: Sequelize.INTEGER,
    unitPrice: Sequelize.INTEGER,
    amount: Sequelize.STRING,
    companyName: Sequelize.STRING,
  });
  return OrderItems;
};
