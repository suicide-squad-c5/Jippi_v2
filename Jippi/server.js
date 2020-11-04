const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3008;
const cors = require("cors");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());
// Routes
// CompanyRoutes
const signupCompanyRouter = require("./server/routes/auth/compnay/signupcompany.js")
  .signupCompanyRouter;
const loginCompanyRouter = require("./server/routes/auth/compnay/logincompany.js");
const companyProfileRouter = require("./server/routes/companyprofile");
//CustomerRoutes
const loginCustomerRouter = require("./server/routes/auth/customer/logincustomer.js");
const signupCustomerRouter = require("./server/routes/auth/customer/signupcustomer.js");
const customerProfileRouter = require("./server/routes/customerProfile.js");
// items & products
const itemsRouter = require("./server/routes/items.js");
// ADMIN LOGIN.
const adminRouter = require("./server/routes/auth/admin/adminLogin");
const adminCreateRouter = require("./server/routes/auth/admin/adminCreate");
// CONTACT.
const contactRouter = require("./server/routes/contact");

// comments
const commentsRouter = require("./server/routes/commentsRouter");

//company Name "Numbers"
const customer_companyRouter = require("./server/routes/customer_company");

//post new order
const ordersRouter = require("./server/routes/order");
const orderItemsRouter = require("./server/routes/orderItems");

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
// ADMIN
app.use("/admin/jippi", adminRouter);
app.use("/admin/jippi/create", adminCreateRouter);
// CONTACT.
app.use("/contact", contactRouter);

// comments
app.use("/api/item/comments", commentsRouter);

//company Name "Numbers"
app.use("/companyName", customer_companyRouter);

//post new order
app.use("/", ordersRouter);
app.use("/order", orderItemsRouter);

app.listen(PORT, () => {
  console.log(`Main Server is listening on port ${PORT}...`);
});
