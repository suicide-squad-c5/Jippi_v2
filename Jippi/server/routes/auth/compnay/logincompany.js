const loginCompanyRouter = require("express").Router();
const db = require("../../../../database/models");
const Company = db.companies;
const jwt = require("jsonwebtoken");


loginCompanyRouter.post("/company/login", (req, res) => {
  console.log("heeeey", req.body);
  console.log("Company", Company);

  Company.findOne({
    where: {
      companyEmail: req.body.companyEmail,
    },
  }).then((company) => {
    console.log("hey then", company);

    if (!req.body) {
      res.status(500).json({
        title: "error in login company",
        error: "nothing in the request body",
      });
    }
    if (!company) {
      res.status(400).json({
        title: "this company is not definened",
      });
    }

    console.log("tets 1", company);
    console.log(req.body.companyPassword);
    console.log("ghgh", company.companyPassword);

    if (req.body.companyPassword !== company.companyPassword) {
      return res.status(401).json({
        title: "log failed",
        error: "invalid password"
      });
    }

    let token = jwt.sign({
        companyId: company.id,
      },
      "check"
    );
    return res.status(200).json({
      title: "login successful",
      token: token,
      id: company.id,
    });
  });
});
module.exports = loginCompanyRouter;
