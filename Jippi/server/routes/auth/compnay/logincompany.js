const loginCompanyRouter = require("express").Router();
const db = require("../../../../database/models");
const Company = db.companies;
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

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

// sending an email to the company to verify 
loginCompanyRouter.post('/sendmail/:id', (req, res) => {
  console.log("req.body", req.body)
  console.log("req.params", req.params)
  Company.findOne({
    where: {
      id: req.params.id,
    }
  }).then((company) => {


    let transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "jipp.pi.17@gmail.com",
        pass: "jippi1199"
      },
      tls: {
        rejectUnauthorized: false
      }
    });
    console.log("transporter.auth", transporter.options)

    const getRandomString = () => {
      var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var result = '';
      for (var i = 0; i < 6; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
      }
      return result;
    }

    let mailOptions = {
      form: 'jipp.pi.17@gmail.com',
      to: company.companyEmail,
      subject: "Test",
      text: getRandomString()

    }
    transporter.sendMail(mailOptions).then(data => {
      res.send(data)
    }).catch(err => {
      res.send(err)
    })

  }).catch((err) => {
    res.status(500).send(err)
  })
});

module.exports = loginCompanyRouter;
