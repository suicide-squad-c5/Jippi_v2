var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    companyName: Sequelize.STRING,
    companyEmail: {
      type: Sequelize.STRING,
      unique: true
    },
    companyPassword: Sequelize.STRING,
    avatar: Sequelize.STRING,
    location: Sequelize.STRING,
    phoneNumber: Sequelize.STRING,
    verificationCode: Sequelize.STRING,
    baned: Sequelize.STRING,
    verified: DataTypes.BOOLEAN,
  });
  return Company;
};
