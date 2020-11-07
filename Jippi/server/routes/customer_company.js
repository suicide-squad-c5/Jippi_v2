const customer_companyRouter = require("express").Router();
const db = require("../../database/models");

const company = db.companies;

const item = db.items;
const user = db.customers;

const customerSearch = db.customers;

var wkhtmltopdf = require("wkhtmltopdf");
wkhtmltopdf.command = "D:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";
const pdfTemplate = require("./receiptTemplate");
const nodemailer = require("nodemailer");
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
  customerSearch
    .findOne({
      where: {
        id: req.body.data.customerID,
      },
    })
    .then((data) => {
      console.log("data", data.email);
      wkhtmltopdf(pdfTemplate(req.body.data), {
        output: `${__dirname}/out/Order Num ${req.body.data.order}.pdf`,
        pageSize: "letter",
      });

      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "jipp.pi.17@gmail.com",
          pass: "jippi1199",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });
      let mailOptions = {
        form: "jipp.pi.17@gmail.com",
        to: data.email,
        subject: "order receipt",
        html: pdfTemplate(req.body.data),
      };
      transporter.sendMail(mailOptions).then(() => {
        res.send({ status: 200 });
      });
    });
});

module.exports = customer_companyRouter;
