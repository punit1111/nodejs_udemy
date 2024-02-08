const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const brand = sequelize.define({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  brand_name: {
    type: Sequelize.STRING,
  },
  model_name: {
    type: Sequelize.STRING,
  },

});


module.exports = brand;   