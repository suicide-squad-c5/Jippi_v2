module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "ch5Thebest",
  DB: "jippi",
  dialect: "mysql",
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
