const customer_companyRouter = require("express").Router();
const db = require("../../database/models");

const company = db.companies;
const item = db.items;
const user = db.customers;

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
//items for order
customer_companyRouter.get("/itemOrder/:itemId", (req, res) => {
  item
    .findOne({
      where: {
        id: req.params.itemId,
      },
    })
    .then((item) => {
      console.log("item", item);
      res.send({ item: item });
    });
});
//user for order
customer_companyRouter.get("/userorder/:userId", (req, res) => {
  user
    .findOne({
      where: {
        id: req.params.userId,
      },
    })
    .then((user) => {
      console.log("user", user);
      res.send({ user: user });
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
