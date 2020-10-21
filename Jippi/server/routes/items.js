const itemsRouter = require("express").Router();
const db = require("../../database/models");
const newItem = db.items;

itemsRouter.post("/", (req, res) => {
  console.log("req", req.body);
  const item = {
    itemName: req.body.itemName,
    itemPrice: req.body.itemPrice,
    itemDescription: req.body.itemDescription,
    itemImage: req.body.itemImage,
    itemRating: req.body.itemRating,
    itemCompany: req.body.companyID,
    itemCategory: req.body.category,
    itemKind: req.body.kind,
  };
  newItem
    .create(item)
    .then(() => {
      res.status(200).send("success !");
    })
    .catch((e) => {
      console.log(e);
    });
});

module.exports = itemsRouter;
