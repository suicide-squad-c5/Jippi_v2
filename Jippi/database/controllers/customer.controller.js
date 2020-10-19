const db = require("../models");
const Customer = db.customers;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.first_name) {
    res.status(400).send({
      message: "Name cannot be empty!",
    });
    return;
  }

  // Create a Customer
  const customer = {};

  // Save Tutorial in the database
  Customer.create(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
