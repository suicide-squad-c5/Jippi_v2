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
    received: req.body.received,
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
        received: false,
      },
    })
    .then((orderItem) => {
      console.log("order", orderItem);
      res.send({ orderItem });
    });
});

//receved update
orderItemsRouter.put("/order_items/:orderId/:companyName", async (req, res) => {
  try {
    const orders = await orderItem.update(
      { received: true },
      {
        where: {
          companyName: req.params.companyName,
          orderId: req.params.orderId,
        },
      }
    );
    console.log("orders==>", orders);
  } catch (e) {
    console.log(e);
  }
});

module.exports = orderItemsRouter;
