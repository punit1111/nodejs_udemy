const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Product = require("../models/product_model");

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

// ProductCategory.associate = ()=>{
//   ProductCategory.hasMany(Product, {
//     foreignKey: Product.category_id,
//   });
// }

module.exports = ProductCategory;
