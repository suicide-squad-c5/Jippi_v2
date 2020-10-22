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
//////////////
customerProfileRouter.post("/update/:userid", (req, res) => {
  console.log("++++>", req.body);
  customer.findOne({ where: { id: req.body.userid } }).then((customer) => {
    console.log("customer", customer.dataValues);
    customer.update(req.body).then((data) => {
      res.send(data);
    });
  });
});

module.exports = customerProfileRouter;
