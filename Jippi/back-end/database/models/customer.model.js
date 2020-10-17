module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customer", {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    avatar: Sequelize.STRING,
    address: Sequelize.STRING,
    phone_number: Sequelize.INTEGER,
  });
  return Customer;
};
