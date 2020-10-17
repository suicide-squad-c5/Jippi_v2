const loginCustomerRouter = require("express").Router();
const Customer = require("../../../database/customerShema.js");
const jwt = require("jsonwebtoken");

loginCustomerRouter.post("/login", async (req, res) => {
  try {
    const result = await Customer.findOne({
      where: {
        email: req.body.email.email,
      },
    });
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});
module.exports = loginCustomerRouter;
