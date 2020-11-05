const customerProfileRouter = require("express").Router();
const db = require("../../database/models");
const customer = db.customers;
const multer = require("multer");
var cloudinary = require("cloudinary").v2;
var passwordHash = require("password-hash");

cloudinary.config({
  cloud_name: "jipi",
  api_key: "895721462325433",
  api_secret: "jwt587tJi2fPSuNYmcgq-w4svHU",
});
// that's a multer method that store the file in the upload folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
// const uploads = multer({
//   dest: "upload",
// });
const fileFileter = (req, res, cb) => {
  if (file.mimetype !== "image/jpeg" || file.mimetype !== "image/png") {
    cb(null, false);
  } else {
    cb(null, true);
  }
};
const uploads = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFileter: fileFileter,
});
customerProfileRouter.get("/:userid", (req, res) => {
  console.log("++++>", req.params);
  customer
    .findOne({
      where: {
        id: req.params.userid,
      },
    })
    .then((customer) => {
      console.log("====+>", customer);
      res.send(customer);
    });
});
//to  update all  customer data from his profile
customerProfileRouter.put(
  "/update/:userid",
  uploads.single("customerImg"),
  (req, res) => {
    console.log("req.body====", req.body);
    console.log("req.file====", req.file);
    // customer
    //   .findOne({
    //     where: {
    //       id: req.params.userid,
    //     },
    //   })
    //   .then((customer) => {
    //     console.log("customer", customer);
    var isNewImg;
    req.body.customerImg
      ? (isNewImg = req.body.customerImg.slice(0, 5) === "http:")
      : (isNewImg = false);
    if (isNewImg) {
      const values = {
        first_name: req.body.firstName,
        last_Name: req.body.lastName,
        email: req.body.email,
        avatar: req.body.customerImg,
        address: req.body.address,
        phone_number: req.body.phoneNumber,
      };
      customer
        .update(values, { where: { id: req.params.userid } })
        .then((updatedCustomer) => {
          res.send({ status: 201 });
        });
    } else {
      const img =
        req.file.path || customer.avatar || "/assets/user-profile.png";
      cloudinary.uploader.upload(img, (error, result) => {
        error && console.log(error);
        let values = {
          first_name: req.body.firstName,
          last_Name: req.body.lastname,
          email: req.body.email,
          avatar: result.url,
          address: req.body.address,
          phone_number: req.body.phoneNumber,
        };
        customer
          .update(values, { where: { id: req.params.userid } })
          .then((updatedCustomer) => {
            res.send({ status: 200 });
          });
      });
    }
  }
);

customerProfileRouter.get("/", async (req, res) => {
  try {
    const customers = await customer.findAll();
    res.send(customers);
  } catch (err) {
    console.log(err);
  }
});

// UPDATE CUSTOMER PASSWORD.
customerProfileRouter.put("/", async (req, res) => {
  customer
    .update(
      {
        password: passwordHash.generate(req.body.customerPassword),
      },
      {
        where: {
          id: req.body.customerId,
        },
      }
    )
    .then((data) => {
      res.send({ status: 101 });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = customerProfileRouter;
