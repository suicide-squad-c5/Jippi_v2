module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    companyName: Sequelize.STRING,
    companyEmail: Sequelize.STRING,
    companyPassword: Sequelize.STRING,
    avatar: Sequelize.STRING,
    location: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    verificationCode: Sequelize.STRING,
    baned: Sequelize.STRING,
  });
  return Company;
};
