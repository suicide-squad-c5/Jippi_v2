const companyProfileRouter = require("express").Router();
const db = require("../../database/models");
const multer = require("multer");

// that's a multer method that store the file in the upload folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// that's to reject a none image  files
const fileFileter = (req, res, cb) => {
  if (file.mimetype !== 'image/jpeg' || file.mimetype !== 'image/png') {
    cb(null, false);
  } else {
    cb(null, true);
  }
}
/* that contains everything from above funciton .it wil be invoked in the updating avatart function to ru every thing we seted up  */
const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10
  },
  fileFileter: fileFileter
});


const Company = db.companies
// updating company Data 
companyProfileRouter.put("/update/:id", (req, res) => {
  console.log("req.body =====>", req.body);
  console.log("Company =====>", Company);
  console.log(" req.params update ", req.params);

  Company.findOne({
      where: {
        id: req.params.id
      }
    }).then(record => {
      if (!record) {
        throw new Error("No Company found");
      }

      let values = {
        registered: true,
        companyName: req.body.name,
        companyEmail: req.body.email,
        companyPassword: req.body.password,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
      }
      record.update(values).then(updatedRecord => {
        res.status(200).send(record);
        console.log("Updated", JSON.stringify(updatedRecord));
      })
    })
    .catch(err => {
      console.log("the catch error", err)
      res.status(500).send(err);
    })
});
/* that's for getting  one company data
(the one that it is logged in now ) */

companyProfileRouter.post('/get/:id', async (req, res) => {
  console.log(" req.params get ", req.params)

  Company.findOne({
      where: {
        id: req.params.id
      }
    }).then(record => {

      if (!record) {
        throw new Error("No Company found");
      } else {
        console.log("record", record);
        res.send(record)
      }
    })
    .catch(err => {
      console.log("the catch error", err)
      res.status(500).send(err);
    })
});
// to update to company avatar profile
companyProfileRouter.put('/avatar/:id', uploads.single('src'), (req, res) => {

  console.log("upload", req.file);
  console.log("req.body =======>", req.body);
  console.log("req.params ====> ", req.params);

  Company.findOne({
    where: {
      id: req.params.id
    }
  }).then((company) => {

    if (!company) {
      throw new Error("company not found");
    }

    let avatar = {
      avatar: req.file.path
    }

    company.update(avatar).then(updatedAvatar => {
      console.log("updated successfully");
      res.status(200).send(updatedAvatar);
    }).catch(err => {
      res.status(500).send(err);
    })

  }).catch((err) => {
    res.status(501).send(err)
  })

});


module.exports = companyProfileRouter;
