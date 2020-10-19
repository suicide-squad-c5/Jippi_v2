module.exports = (sequelize, Sequelize) => {
  const company = sequelize.define("company", {
    companyName: Sequelize.STRING,
    companyEmail: Sequelize.STRING,
    companyPassword: Sequelize.STRING,
    avatar: Sequelize.STRING,
    location: Sequelize.STRING,
    phoneNumber: Sequelize.INTEGER,
  });

  return company;
};
