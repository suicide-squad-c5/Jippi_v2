const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3008;
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// Routes
// CompanyRoutes
const signupCompanyRouter = require("./server/routes/auth/compnay/signupcompany.js");
const loginCompanyRouter = require("./server/routes/auth/compnay/logincompany.js");
const companyProfileRouter = require("./server/routes/companyprofile");
//CustomerRoutes
const loginCustomerRouter = require("./server/routes/auth/customer/logincustomer.js");
const signupCustomerRouter = require("./server/routes/auth/customer/signupcustomer.js");
const customerProfileRouter = require("./server/routes/customerProfile.js");
// items & products
const itemsRouter = require("./server/routes/items.js");

const db = require("./database/models");
db.sequelize
  .sync({
    force: false,
    alter: true,
  })
  .then(() => {
    console.log("Drop and re-sync db.");
  });
// Using those routes
// Company
app.use("/api/register/company", signupCompanyRouter);
app.use("/api/login/company", loginCompanyRouter);
app.use("/api/profile/company", companyProfileRouter);
//Customer
app.use("/api/register/customer", signupCustomerRouter);
app.use("/api/login/customer", loginCustomerRouter);
app.use("/api/profile/customer", customerProfileRouter);
// items
app.use("/api/items", itemsRouter);

app.listen(PORT, () => {
  console.log(`Main Server is lestening on port ${PORT}...`);
});
