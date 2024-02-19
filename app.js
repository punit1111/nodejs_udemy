const express = require("express");

const dotenv = require("dotenv");

const productRoutes = require("./routes/products_routes");

const userRoutes = require("./routes/user_routes");

const authRoutes = require("./routes/auth_routes");

const sequelize = require("./utils/database");

//const mongoConnect = require("./utils/mongo_database").mongoConnect;

const path = require("path");

const bodyParser = require("body-parser");

const { graphqlHTTP } = require("express-graphql");
const graphqlSchema = require("./graphql/schema");
const graphqlResolver = require("./graphql/resolver");

const { errorHandler } = require("./error_handler/app_error");

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use("/product", productRoutes);

app.use("/user", userRoutes);

app.use("/auth", authRoutes);

// app.use("/abc", (req, res, next) => {
//   res.json({"abc":"abc"});
//   //next();
// });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    customFormatErrorFn(err) {
      console.log(`getusers three ${err}`);
      if (!err.originalError) {
        return err;
      }
      const data = err.originalError.data;
      const message = err.message || "An error occured.";
      const code = err.originalError.code || 500;
      return { message: message, status: code, data: data };
    },
  })
);

app.use(errorHandler);

app.all("*", (req, res, next) => {
  console.log("header result error not found 404");
  res.status(404).json({ message: "URL NOT FOUND" });
});


sequelize
  .sync({ alter: true })
  .then((result) => {
    const server = app.listen(3000);
    // const io = require('socket.io')(server);
    // io.on('connection', socket => {
    //   console.log(socket);
    // });
    console.log(result);
    console.log(`database connected ${result} `);
  })
  .catch((error) => {
    console.log(`sequelize error ${error}`);
  });

// mongoConnect((client) => {
//   console.log(client);
//   app.listen(3000);
// });
