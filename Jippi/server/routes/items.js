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
const uploads = multer({
  dest: 'upload'
})
// posting 
itemsRouter.post("/", uploads.any(0), (req, res) => {
  console.log("req.file", req.file);
  console.log("req", req.body);
  var theImg = req.files[0].path;
  cloudinary.uploader.upload(theImg, (error, result) => {
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
        .then((theItem) => {
          console.log("theItem that jsut created", theItem)
          //sending the item image to  cloudinary

          error && console.log("cloudinary [error] ==> ", error);
          console.log(result);
          res.send(theItem)
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = itemsRouter;
