const db = require("../../database/companySchema.js");
const Comapny = db.companies;

exporte.create = (req, res) => {
  console.log(req.body);
  Comapny.create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "you have problem in your company controlers",
      });
    });
};
