const customerProfileRouter = require("express").Router();
const db = require("../../database/models");

// app.get("/getUser", (req, res) => {
//   db.getAllData((err, data) => {
//     if (err) throw err;
//     res.send(data);
//   });
// });
module.exports = customerProfileRouter;
