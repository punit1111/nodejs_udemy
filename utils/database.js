const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("flip-kart", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
