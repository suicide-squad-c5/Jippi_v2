const db = require("../models");
const comapny = db.company;

exporte.create = (req, res) => {
  const company = {};

  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "you have problem in your company controlers",
      });
    });
};
