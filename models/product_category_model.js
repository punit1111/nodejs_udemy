const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const ProductCategory = sequelize.define("product_categories", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = ProductCategory;
