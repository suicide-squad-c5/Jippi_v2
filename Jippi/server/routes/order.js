const ordersRouter = require("express").Router();
const db = require("../../database/models");
// const sequelize = db.sequelize;

const newOrder = db.orders;
// const orderItem = db.orderItems;

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

// ordersRouter.get("/orders/:orderId", async (req, res) => {
//   console.log("Numbres", req.params.orderId);
//   try {
//     const orderr = await sequelize.query(`SELECT * FROM orders INNER JOIN orderitems ON orderitems.orderId = ${req.params.orderId} `)
//   }
// })

ordersRouter.get("/orders/:orderId", (req, res) => {
  newOrder
    .findOne({
      where: {
        orderId: req.params.orderId,
      },
    })
    .then((order) => {
      console.log("orderr", order);
      res.send({ order });
    });
});

module.exports = ordersRouter;
