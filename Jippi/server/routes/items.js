const itemsRouter = require("express").Router();
const db = require("../../database/models");
const multer = require("multer");
var cloudinary = require('cloudinary').v2;

const newItem = db.items
cloudinary.config({
  cloud_name: 'jipi',
  api_key: '895721462325433',
  api_secret: 'jwt587tJi2fPSuNYmcgq-w4svHU'
});

const up = multer({
  dest: 'upload'
});

// posting an Item
itemsRouter.post("/", up.single('itemImage'), (req, res) => {
  console.log("getting the request");
  console.log("req.file", req.file);
  console.log("req", req.body);
  //sending the item image to  cloudinary
  var img = req.file.path;
  cloudinary.uploader.upload(img, (error, result) => {
      error && console.log("cloudinary [error] ==> ", error);
      console.log("result", result)
      const item = {
        itemName: req.body.itemName,
        itemPrice: req.body.itemPrice,
        itemDescription: req.body.itemDescription,
        itemImage: result.url,
        itemRating: req.body.itemRating,
        itemCompany: req.body.companyID,
        itemCategory: req.body.category,
        itemKind: req.body.kind,
      };
      newItem
        .create(item)
    }).then((theItem) => {
      console.log("theItem", theItem);
      res.status(201).send(theItem);
    })
    .catch((err) => {
      res.send(err)
    })
});

itemsRouter.post('/get/:id', (req, res) => {
  console.log("res", res);
  console.log("req", req)
  newItem.findOne({
    were: {
      id: req.params.id
    }
  }).then((data) => {
    res.status(200).send(data)
  }).catch((err) => {
    res.status(500).send(err)
  })
});

module.exports = itemsRouter;
