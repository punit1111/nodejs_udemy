const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

console.log(`node env ${process.env.NODE_ENV}`);

const config = require("../config/config")[process.env.NODE_ENV];

const sequelize = new Sequelize("flipcart", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});
 
module.exports = sequelize;
