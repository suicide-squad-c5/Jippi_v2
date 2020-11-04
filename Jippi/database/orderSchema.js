const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    orderId: Sequelize.STRING,
    customerId: Sequelize.INTEGER,
    totalPrice: Sequelize.INTEGER,
    type: Sequelize.STRING,
    received: Sequelize.STRING,
  });
  return Order;
};
