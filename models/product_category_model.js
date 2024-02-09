const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

const Product = require("../models/product_model");

const ProductCategory = sequelize.define("product_categories", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true, 
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}); 

// ProductCategory.associate = ()=>{
//   ProductCategory.hasMany(Product, {
//     foreignKey: Product.category_id,
//   });
// }

module.exports = ProductCategory;


// Table ProductCategory {
//   id string [primary key]
//   name varchar
//   description varchar
//   image_url varchar
//   subcategories list
// }
