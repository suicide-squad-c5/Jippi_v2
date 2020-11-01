// const mysql = require("mysql");
const commentsRouter = require("express").Router();
const {
  send
} = require("process");
const db = require("../../database/models");
const sequelize = db.sequelize;

const Customer = db.customers;
const newItem = db.items;
const Comments = db.comments;

commentsRouter.post('/post/:itemId', async (req, res) => {
  // console.table(req.body)
  newItem.findOne({
    where: {
      id: req.params.itemId
    }

  }).then((item) => {
    console.log("===============>req.params", req.params);
    console.log("===============>req.params", req.body);
    console.log("===============>test", item);
    const vals = {
      itemId: item.id,
      userId: req.body.userId,
      comment: req.body.comment,
      likes: req.body.likes,
    }
    console.table(vals)

    Comments.create(vals).then((postedComment) => {

      res.json({
        postedComment,
        message: "Your Comment posted successfully "
      })
    }).catch((error) => {
      res.status(400).send(error)
    });

  }).catch((err) => {
    res.send(err)
  });
});
// ===============================================

// const getUsers = function () {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `SELECT Comments.userId,Comments.comment,Comments.likes, Customers.first_name , Customers.avatar
// FROM Comments
// INNER JOIN Customers ON Comments.userId = Customers.id;
// `,
//       (err, data) => {
//         if (err) {
//           reject(err);
//         }
//         resolve(data);
//       }
//     );
//   });
// };
// let test = async () => {
//   try {
//     let result = await getUsers()
//     console.log(result)
//   } catch (err) {
//     console.log(err)
//   }
// }
// test()
commentsRouter.get('/get/all/:itemId', async (req, res) => {
  console.log('kkkkk', req.params.itemId)
  try {
    const result = await sequelize.query(`SELECT Comments.userId,Comments.comment,Comments.likes,Comments.itemId, Customers.first_name , Customers.avatar
FROM Comments
INNER JOIN Customers ON Comments.userId = Customers.id INNER JOIN Items ON Items.id AND Comments.itemId = ${req.params.itemId};
`)
    console.log("===============>", result)
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err)
  }
});

module.exports = commentsRouter;
