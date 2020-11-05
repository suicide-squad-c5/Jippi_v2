const customer_companyRouter = require("express").Router();
const db = require("../../database/models");
const company = db.companies;
var wkhtmltopdf = require("wkhtmltopdf");
wkhtmltopdf.command = "D:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";
const pdfTemplate = require("./receiptTemplate");
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

customer_companyRouter.post("/payment", (req, res) => {
  wkhtmltopdf(pdfTemplate(req.body.data), {
    output: `${__dirname}/out/${req.body.data.order}.pdf`,
    pageSize: "letter",
  });
  console.log(" __dirname ", __dirname);
  res.send("!!!");
});

module.exports = customer_companyRouter;
