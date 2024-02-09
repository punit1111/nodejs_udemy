const express = require("express");

const dotenv = require("dotenv");

const productRoutes = require("../nodejs_udemy/routes/products_routes");

const userRoutes = require("../nodejs_udemy/routes/user_routes");

const authRoutes = require("../nodejs_udemy/routes/auth_routes");

const sequelize = require("./utils/database"); 

const path = require("path");

const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/product", productRoutes);

app.use("/user", userRoutes);

app.use("/auth", authRoutes);   

app.all("*", (req, res, next) => {
  console.log('header result error not found 404');
  res.status(404).json({ message: "URL NOT FOUND" });
});

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res
    .status(status)
    .json({ status: status, message: message, stack: error.stack });
});

sequelize
  .sync({ alter: true })  
  .then((result) => {
    app.listen(3000);
    console.log(result);
    console.log(`database connected ${result} `);
  })
  .catch((error) => {
    console.log(`sequelize error ${error}`);
  }); 
 