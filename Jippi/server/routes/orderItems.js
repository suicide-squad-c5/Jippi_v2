const orderItemsRouter = require("express").Router();
const db = require("../../database/models");

const orderItem = db.orderItems;

orderItemsRouter.post("/order_item", (req, res) => {
  console.log("Achref");
  const item = {
    orderId: req.body.orderId,
    ItemId: req.body.itemId,
    unitPrice: req.body.unitPrice,
    amount: req.body.amount,
    companyName: req.body.companyName,
  };

  orderItem
    .create(item)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

orderItemsRouter.get("/company_order/:companyID", (req, res) => {
  orderItem
    .findAll({
      where: {
        companyName: req.params.companyID,
      },
    })
    .then((orderItem) => {
      console.log("order", orderItem);
      res.send({ orderItem });
    });
});

module.exports = orderItemsRouter;
