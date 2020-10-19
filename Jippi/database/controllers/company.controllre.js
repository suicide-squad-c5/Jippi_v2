const db = require("../models");
const company = db.company;

exporte.create = (req, res) => {
  Tutorial.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "you have problem in your company controlers",
      });
    });
};
