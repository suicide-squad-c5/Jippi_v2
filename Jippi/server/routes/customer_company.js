const customer_companyRouter = require("express").Router();
const db = require("../../database/models");
const company = db.companies;
var cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: "jipi",
  api_key: "895721462325433",
  api_secret: "jwt587tJi2fPSuNYmcgq-w4svHU",
});

customer_companyRouter.get("/companyName/:companyID", (req, res) => {
  company
    .findOne({
      where: {
        id: req.params.companyID,
      },
    })
    .then((company) => {
      console.log("companyName", company);
      res.send({ companyName: company.companyName });
    });
});

module.exports = customer_companyRouter;
