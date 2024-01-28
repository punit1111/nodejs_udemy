const express = require("express");
const productRoutes = require("../nodejs_udemy/routes/products_routes");

const sequelize = require("../nodejs_udemy/utils/database");

const path = require("path");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(productRoutes);

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
