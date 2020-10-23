const signupCompanyRouter = require("express").Router();
const db = require("../../../../database/models");
const companyLog = db.companies;

signupCompanyRouter.post("/comapny/signup", (req, res) => {
  console.log(req.body);

  // create the object that will take the values from the request.
  const company = {
    companyName: req.body.companyName,
    companyEmail: req.body.companyEmail,
    companyPassword: req.body.companyPassword,
    avatar: req.body.avatar || "",
    location: req.body.location || "",
    phoneNumber: req.body.phoneNumber || "",
  };

  // save the comapny data to the database.
  companyLog
    .create(company)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send(err.message || "you have err in creating table company ");
    });
});
module.exports = signupCompanyRouter;
