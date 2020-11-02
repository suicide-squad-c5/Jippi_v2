var DataTypes = require('sequelize/lib/data-types');
module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define("comments", {
    itemId: Sequelize.INTEGER,
    userId: Sequelize.INTEGER,
    comment: Sequelize.STRING,
    likes: Sequelize.INTEGER
  });
  return Comments;
};
