module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admins", {
    adminName: Sequelize.STRING,
    adminEmail: Sequelize.STRING,
    adminPassword: Sequelize.STRING,
    adminAvatar: Sequelize.STRING,
    // ** IN CASE THAT YOU WANT TO ADD ADMIN FROM MYSQL UNCOMMENT THIS PART.

    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP()"),
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal(
        "CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP()"
      ),
    },
  });
  return Admin;
};
