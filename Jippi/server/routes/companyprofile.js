const companyProfileRouter = require("express").Router();
const db = require("../../database/models")
const Company = db.companies
// updating company Data 
companyProfileRouter.put("/update/:id", (req, res) => {
  console.log("req.body =====>", req.body)
  console.log("Company =====>", Company)
  console.log(" req.params", req.params)
  Company.findOne({
      where: {
        id: req.params.id
      }
    }).then(record => {

      if (!record) {
        throw new Error("No Company found");
      }

      let values = {
        registered: true,
        companyName: req.body.companyName,
        companyEmail: req.body.companyEmail,
        companyPassword: req.body.password,
        avatar: req.body.avatar,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
      }
      record.update(values).then(updatedRecord => {
        res.status(200).send(record);
        console.log("Updated", JSON.stringify(updatedRecord));
      })
    })
    .catch(err => {
      console.log("the catch error", err)
      res.status(500).send(err);
    })

});
module.exports = companyProfileRouter;
