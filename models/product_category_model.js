const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const ProductCategory = sequelize.define("product_category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
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
  subcategories: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = ProductCategory;
