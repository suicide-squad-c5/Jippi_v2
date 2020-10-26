const itemsRouter = require("express").Router();
const db = require("../../database/models");
const multer = require("multer");

var cloudinary = require("cloudinary").v2;

const newItem = db.items;

cloudinary.config({
  cloud_name: "jipi",
  api_key: "895721462325433",
  api_secret: "jwt587tJi2fPSuNYmcgq-w4svHU",
});

const up = multer({
  dest: "upload",
});

// posting an Item
itemsRouter.post("/add", up.single("itemImage"), (req, res) => {
  var img = req.file.path;
  cloudinary.uploader
    .upload(img, (error, result) => {
      error && console.log("cloudinary [error] ==> ", error);
    })
    .then((result) => {
      console.log("result9898989*", result);
      const item = {
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage: result.url,
        itemRating: req.body.itemRating,
        itemCompany: req.body.companyID,
        itemCategory: req.body.selectedCategory,
        itemKind: req.body.selectedKind,
      };
      newItem
        .create(item)
        .then((theItem) => {
          console.log("theItem=========>", theItem);
          res.send(theItem);
        })
        .catch((err) => {
          res.send(err);
        });
    });
});
// to get a certain item by it's id
itemsRouter.post("/get/:id", (req, res) => {
  console.log("res", req.body);
  console.log("req.params", req.params);
  newItem
    .findOne({
      where: {
        id: req.params.id,
      },
    })
    .then((data) => {
      console.log("data", data);
      res.status(200).send(data);
    })
    .catch((err) => {
      if (err) {
        res.send("there is no data");
      }
    });
});

itemsRouter.get("/", async (req, res) => {
  try {
    const items = await newItem.findAll();
    res.send(items);
  } catch (e) {
    console.log(e);
  }
});

itemsRouter.delete(`/:itemId`, async (req, res) => {
  newItem.destroy({
    where: {
      id: req.params.itemId,
    },
  });
  console.log("heyyyyyyy", req.params.itemId);
});

itemsRouter.get(`/Company/:id`, async (req, res) => {
  try {
    const items = await newItem.findAll({
      where: {
        itemCompany: req.params.id,
      },
    });
    res.status(200).send(items);
  } catch (e) {
    console.error(e);
  }
});

module.exports = itemsRouter;
