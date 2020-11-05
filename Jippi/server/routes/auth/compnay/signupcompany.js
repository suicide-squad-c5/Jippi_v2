const signupCompanyRouter = require("express").Router();
const db = require("../../../../database/models");
const companyLog = db.companies;
const nodemailer = require("nodemailer");
var passwordHash = require("password-hash");

require("dotenv").config();

// var exports = {
//   decode
// }

let dcode = "";
const getRandomString = () => {
  var randomChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var res = "";
  for (var i = 0; i < 6; i++) {
    res += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  dcode = res;
  exports.dcode = dcode;
  return res;
};

console.log("44", dcode);
signupCompanyRouter.post("/comapny/signup", (req, res) => {
  console.log(req.body);

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
  console.log("transporter.auth", transporter.options);
  // generate a random 6 digit code
  getRandomString();
  let mailOptions = {
    form: "jipp.pi.17@gmail.com",
    to: req.body.companyEmail,
    subject: "Test",
    text: dcode,
  };
  transporter.sendMail(mailOptions).then((response) => {
    const company = {
      companyName: req.body.companyName,
      companyEmail: req.body.companyEmail,
      companyPassword: passwordHash.generate(req.body.companyPassword),
      avatar: req.body.avatar,
      location: req.body.location,
      phoneNumber: req.body.phoneNumber,
      verificationCode: dcode,
      baned: "false",
    };
    // save the comapny data to the database.
    companyLog.create(company).then((data) => {
      res.send(data);

      console.log(response);
      res.json({
        response: response,
        email: data.companyEmail,
        id: data.id,
      });
    });
  });
});
exports.signupCompanyRouter = signupCompanyRouter;
