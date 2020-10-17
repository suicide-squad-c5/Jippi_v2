const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3008;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Routes
// CompanyRoutes
const signupCompanyRouter = require("./routes/auth/company/signupcompany.js");
const loginCompanyRouter = require("./routes/auth/company/logincompany.js");
const companyProfileRouter = require("./routes/companyprofile.js");
//CustomerRoutes
const loginCustomerRouter = require("./routes/auth/customer/logincustomer.js");
const signupCustomerRouter = require("./routes/auth/customer/signupcustomer.js");
const customerProfileRouter = require("./routes/customerProfile.js");
// items & products
const itemsRouter = require("./routes/items.js");

const db = require("./database/models");
db.sequelize
  .sync({
    force: true,
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../Jippi/dist/Jippi/index.html"));
});

app.listen(PORT, () => {
  console.log(`Main Server is lestening on port ${PORT}...`);
});
