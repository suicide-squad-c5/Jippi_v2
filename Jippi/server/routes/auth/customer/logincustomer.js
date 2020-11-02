const loginCustomerRouter = require("express").Router();
const db = require("../../../../database/models");
const Customer = db.customers;
const jwt = require("jsonwebtoken");
var passwordHash = require("password-hash");

loginCustomerRouter.post("/login", (req, res) => {
  // console.log(req.body);

  // console.log(Customer);

  Customer.findOne({
    where: {
      email: req.body.email,
    },
  }).then((data) => {
    console.log(data);

    let foundCustomer = data;

    if (!req.body) {
      res.status(500).json({
        title: "server side error",
        errorMessage: " the request was empty",
      });
    }

    if (!foundCustomer) {
      res.send({
        status: 404,
        title: "No customer found with that email",
        errorMessage: " the request was empty",
      });
    }

    if (
      passwordHash.verify(req.body.password, foundCustomer.password) !== true
    ) {
      console.log(foundCustomer);
      console.log("req.body.password", req.body.password);
      res.send({
        status: 500,
        title: "log in failed",
        errorMessage: "Wrong password",
      });
    }

    // ELSE
    let token = jwt.sign(
      {
        id: data.id,
      },
      "test"
    );
    console.log("Customer.d", data.id);
    return res.status(200).json({
      succ: "Authentication successful",
      token: token,
      id: data.id,
    });
  });
});

module.exports = loginCustomerRouter;
