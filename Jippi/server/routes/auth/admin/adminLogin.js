const adminRouter = require("express").Router();
const db = require("../../../../database/models");
const Admin = db.admins;
const jwt = require("jsonwebtoken");

adminRouter.post("/", (req, res) => {
  console.log(req.body);

  // CHECK IF THIS ADMIN EXISIT IN DATABASE OR NOT.
  Admin.findOne({
    where: {
      adminEmail: req.body.adminEmail,
    },
  }).then((admin) => {
    console.log("hey im an admin", admin);

    // CHECK IF WE HAVE REQUEST OR NOT.
    if (!req.body) {
      res.send({
        status: 500,
        title: "error in login admin",
        error: "nothing in the request body",
      });
    }
    if (!admin) {
      res.send({
        status: 401,
        title: "admin is not found",
      });
    }

    // CHECK IF THE PASSWORD CORRECT OR NOT.
    if (req.body.adminPassword !== admin.adminPassword) {
      return res.send({
        status: 400,
        title: "log failed",
        error: "invalid password",
      });
    }

    // CREATE TOKEN AND SEND IT WITH THE ADMIN ID TO THE FRONT END.
    let token = jwt.sign(
      {
        adminId: admin.id,
      },
      "check"
    );
    res.send({
      status: 200,
      title: "login successful",
      token: token,
      id: admin.id,
    });
  });
});

module.exports = adminRouter;
