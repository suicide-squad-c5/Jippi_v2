const loginCustomerRouter = require("express").Router();
const db = require("../../../../database/models");
const Customer = db.customers;
const jwt = require("jsonwebtoken");

loginCustomerRouter.post("/login", (req, res) => {

  console.log(req.body);

  Customer.findOne({
    where: {
      email: req.body.email
    }
  })

  //  edge cases

  if (!req.body) {
    res.status(500).send({
      title: "server side error",
      error: " the request was empty"
    });
  }

  if (!Customer) {
    res.status(400).send({
      title: "this Customer is not valid"
    })
  };

  if (req.body.password !== Customer.password) {
    return res.status(401).send({
      title: "log in failed",
      err: "invalid data password does not match"
    })
  }
  // ELSE
  let token = jwt.sign({
    CustomerId: Customer._id
  }, "test");
  return res.status(200).send({
    title: "Authentication successful",
    token: token
  });

});

module.exports = loginCustomerRouter;
