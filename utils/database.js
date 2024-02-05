const { Sequelize } = require("sequelize");

const dotenv = require("dotenv");
dotenv.config();

const config = require("../config/config")[process.env.NODE_ENV];

const sequelize = new Sequelize(config);

module.exports = sequelize;
