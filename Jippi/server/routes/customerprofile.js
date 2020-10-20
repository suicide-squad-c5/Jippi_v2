const customerProfileRouter = require("express").Router();
const db = require("../../database/models");
const customer = db.customers;

customerProfileRouter.get("/:userid", (req, res) => {
  console.log("++++>", req.params);
  customer
    .findOne({
      where: {
        id: req.params.userid,
      },
    })
    .then((customer) => {
      console.log("====+>", customer);
      res.send(customer);
    });
});

module.exports = customerProfileRouter;
