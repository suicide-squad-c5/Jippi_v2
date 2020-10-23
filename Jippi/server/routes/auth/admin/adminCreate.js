const adminCreateRouter = require("express").Router();
const db = require("../../../../database/models");
const adminCreate = db.admins;

adminCreateRouter.post("/", (req, res) => {
  console.log(req.body);

  // CREATE THE OBJECT THAT WILL TAKE THE VALUES FROM THE REQUEST.
  const newAdmin = {
    adminName: req.body.adminName,
    adminEmail: req.body.adminEmail,
    adminPassword: req.body.adminPassword,
    adminAvatar: req.body.adminAvatar || "",
  };

  //SAVE ADMIN DATA TO THE DATABASE.
  adminCreate
    .create(newAdmin)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send(err.message || "YOU HAVE ERR IN CREATING TABLE ADMIN");
    });
});

module.exports = adminCreateRouter;
