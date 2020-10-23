"use strict";

const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .query(`CREATE DATABASE ${dbConfig.DB};`)
  .then((data) => console.log("Dataase created successfully", data))
  .catch((err) => console.log(err));

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customers = require("./customer.model.js")(sequelize, Sequelize);
db.companies = require("../companySchema")(sequelize, Sequelize);
db.items = require("../itemsSchema")(sequelize, Sequelize);
db.admins = require("../adminSchema")(sequelize, Sequelize);
module.exports = db;
