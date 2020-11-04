const ordersRouter = require("express").Router();
const db = require("../../database/models");

const newOrder = db.orders;

ordersRouter.post("/new_order", (req, res) => {
  //   console.log("req.body", req.body);
  const order = {
    orderId: req.body.orderId,
    customerId: req.body.customerId,
    totalPrice: req.body.totalPrice,
    type: req.body.type,
    received: req.body.received,
  };

  newOrder
    .create(order)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = ordersRouter;
