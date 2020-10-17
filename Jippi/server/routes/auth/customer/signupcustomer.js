const signupCustomerRouter = require("express").Router();
// const Customer = require("../../../database/");

const db = require("../../../../database/models");
const Customer = db.customers;

signupCustomerRouter.post("/signup", (req, res) => {
  console.log(req.body);

  // Validate request
  if (!req.body.firstName) {
    res.status(400).send({
      message: "Name cannot be empty!",
    });
    return;
  }

  // Create a Customer

  const customer = {
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    password: req.body.pasword,
    avatar: req.body.avatar,
    address: req.body.address,
    phone_number: req.body.phoneNumber,
  };

  // Save Customer in the database
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Customer.",
      });
    });
});

// signupCustomerRouter.post("/signup", async(req, res) => {
//   try {
//     const result = await Customer.create({});
//     res.send(result);
//   } catch (err) {
//     res.send(`signupCustomerRouter err ${err}`);
//   }
// });
module.exports = signupCustomerRouter;
