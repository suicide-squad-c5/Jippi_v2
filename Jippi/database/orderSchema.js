const Sequelize = require("sequelize");
module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("order", {
    order_id: Sequelize.INTEGER,
    customerId: Sequelize.INTEGER,
    date: Sequelize.STRING,
    totalPrice: Sequelize.INTEGER,
  });
  return Order;
};
