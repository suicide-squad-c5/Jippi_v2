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
      var status = 200;
      res.send({ status });
    })
    .catch((e) => {
      console.log(e);
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

module.exports = itemsRouter;
