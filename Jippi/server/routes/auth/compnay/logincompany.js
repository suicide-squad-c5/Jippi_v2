const loginCompanyRouter = require("express").Router();
const db = require("../../../../database/models");
const Company = db.companies;
const jwt = require("jsonwebtoken");
var passwordHash = require("password-hash");

loginCompanyRouter.post("/company/login", (req, res) => {
  // console.log("heeeey", req.body);
  // console.log("Company", Company);

  // check if this user exist in the database.
  Company.findOne({
    where: {
      companyEmail: req.body.companyEmail,
    },
  }).then((company) => {
    // console.log("hey then", company);
    console.log("company.companyPassword", company.companyPassword);

    // check if we have request or not.
    if (!req.body) {
      res.status(500).json({
        title: "error in login company",
        error: "nothing in the request body",
      });
    }
    if (!company) {
      res.send({
        status: 401,
        title: "this company is not definened",
      });
    }

    // check if the password correct or not.
    if (
      passwordHash.verify(req.body.companyPassword, company.companyPassword) !==
      true
    ) {
      res.send({
        status: 500,
        title: "log failed",
        error: "invalid password",
      });
    }
    if (company.baned === "true") {
      res.send({
        status: 800,
      });
    }

    // create token and send it with the user id to the front end.
    let token = jwt.sign(
      {
        companyId: company.id,
      },
      "check"
    );
    res.status(200).json({
      title: "login successful",
      token: token,
      id: company.id,
    });
  });
});
// var code;
// sending an email to the company to verify
// loginCompanyRouter.post('/sendmail/:id', (req, res) => {
//   console.log("req.body", req.body)
//   console.log("req.params", req.params)
//   Company.findOne({
//     where: {
//       id: req.params.id,
//     }
//   }).then((company) => {

//     let transporter = nodemailer.createTransport({
//       service: 'Gmail',
//       auth: {
//         user: "jipp.pi.17@gmail.com",
//         pass: "jippi1199"
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     });
//     console.log("transporter.auth", transporter.options)

//     const getRandomString = () => {
//       var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       var result = '';
//       for (var i = 0; i < 6; i++) {
//         result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
//       }
//       return code = result;
//     }
//     getRandomString()

//     let mailOptions = {
//       form: 'jipp.pi.17@gmail.com',
//       to: company.companyEmail,
//       subject: "Test",
//       text: code
//     }
//     transporter.sendMail(mailOptions).then(data => {
//       res.json({
//         data: data,
//         email: company.companyEmail
//       });
//     }).catch(err => {
//       res.send(err)
//     })

//   }).catch((err) => {
//     res.status(500).send(err)
//   })
// });

loginCompanyRouter.post("/chekpoint/:id", (req, res) => {
  console.log("Get ready");
  console.log("req.params", req.params);
  // console.log("req.body", req.body);
  Company.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((company) => {
      console.log("company", company.verificationCode);
      console.log("req.body.verificationCode", req.body.verificationCode);
      // EDGE CASES
      if (!company) {
        throw new Error("No Account Found for company");
      }
      var userCode = req.body.verificationCode;
      if (!userCode) {
        res.json({
          response: "Please enter your code",
        });
      }
      if (company.verificationCode !== userCode) {
        res.json({
          response: "The Code is Wrong !",
        });
      }
      // ELSE
      if (company.verificationCode === userCode) {
        res.status(200).json({
          result: "welcome to Jippi",
        });
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = loginCompanyRouter;
