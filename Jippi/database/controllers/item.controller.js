const db = require("../itemsSchema.js");
const { items } = require("../models/index.js");
const Item = db.items;

exporte.create = (req, res) => {
  console.log(req.body);
  Item.create(items)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "you have problem in your item controlers",
      });
    });
};
