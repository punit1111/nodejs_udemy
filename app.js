const express = require("express");

const dotenv = require("dotenv");

const productRoutes = require("../nodejs_udemy/routes/products_routes");

const sequelize = require("./utils/database");

const path = require("path");

const bodyParser = require("body-parser");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(productRoutes);

app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ status: err.status, message: err.message, stack: err.stack });
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
