const express = require("express");
const companyProfileRouter = require("express").Router();
const db = require("../../database/models");
const multer = require("multer");
const path = require("path");
var cloudinary = require("cloudinary").v2;
// companyProfileRouter.use(express.static(path.join(__dirname + './upload')));
const Company = db.companies;

cloudinary.config({
  cloud_name: "jipi",
  api_key: "895721462325433",
  api_secret: "jwt587tJi2fPSuNYmcgq-w4svHU",
});

// that's a multer method that store the file in the upload folder
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './upload');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   }
// });

const uploads = multer({
  dest: "upload",
});

// that's to reject a none image  files
const fileFileter = (req, res, cb) => {
  if (file.mimetype !== "image/jpeg" || file.mimetype !== "image/png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
/* that contains everything from above funciton .it wil be invoked in the updating avatart function to ru every thing we seted up  */
// const uploads = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1024 * 10
//   },
//   fileFileter: fileFileter
// });
// updating company Data
companyProfileRouter.put("/update/:companyId", (req, res) => {
  console.log("req.body =====>", req.body);
  console.log(" req.params update ", req.params);

  Company.findOne({
      where: {
        id: req.params.companyId,
      },
    })
    .then((record) => {
      console.log("Company =====>", record);
      if (!record) {
        throw new Error("No Company found");
      }

      let values = {
        registered: true,
        companyName: req.body.companyName,
        companyEmail: req.body.companyEmail,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
      };
      record.update(values).then((updatedRecord) => {
        res.status(200).send(record);
        console.log("Updated", JSON.stringify(updatedRecord));
      });
    })
    .catch((err) => {
      console.log("the catch error", err);
      res.status(500).send(err);
    });
});

/* that's for getting  one company data
(the one that it is logged in now ) */

companyProfileRouter.post("/get/:id", (req, res) => {
  console.log(" req.params get ", req.params);

  Company.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((record) => {
      if (!record) {
        throw new Error("No Company found get");
      } else {
        // console.log("record", record);
        res.send(record);
      }
    })
    .catch((err) => {
      console.log("the catch error", err);
      res.status(500).send(err);
    });
});

// to update to company avatar profile
companyProfileRouter.put("/avatar/:id", uploads.any(0), (req, res) => {
  console.log(__dirname);
  console.log("req.body", req.body.cId);
  console.log("req", req.files[0].path);
  Company.findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((company) => {
      var theImg = req.files[0].path;

      cloudinary.uploader
        .upload(theImg, (error, result) => {
          error && console.log("&&&&&", error);
          console.log("jsut res", result);
          if (!company) {
            throw new Error("company not found");
          }
          let avatar = {
            avatar: result.url,
          };
          res.send(company);
          company.update(avatar).then((updatedAvatar) => {
            console.log("updated successfully");
            res.status(200).send(updatedAvatar);
          });
        })
        .catch((err) => {
          res.status(400).send(err);
        });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

companyProfileRouter.get("/", async (req, res) => {
  // console.log("request ===>", req.body);
  try {
    const companiesA = await Company.findAll();
    res.status(200).send(companiesA);
  } catch (err) {
    console.log(err);
  }
});

// BAN COMPANY FUNCTION.
companyProfileRouter.put("/:companyId", async (req, res) => {
  console.log(req.body.companyId);
  console.log(req.params.companyId);
  Company.update({
      baned: "true"
    }, {
      where: {
        id: req.params.companyId
      }
    })
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      console.log(err);
    });
});

// UNBANED COMPANY FUNCTION.
companyProfileRouter.put("/unbaned/:companyId", async (req, res) => {
  Company.update({
      baned: "false"
    }, {
      where: {
        id: req.params.companyId
      }
    })
    .then((company) => {
      res.json(company);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = companyProfileRouter;
