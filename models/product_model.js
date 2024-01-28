const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

//const ProductCategory = require("../models/product_category_model");

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category_id: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  image_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  cover_url: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
});

// Product.hasOne(ProductCategory, {
//   foreignKey: ProductCategory.category_id,
// });

module.exports = Product;

// id string [primary key]
//   category_id string [ref: > ProductCategory.id]
//   seller_id string [ref:- Seller.id]
//   title varchar
//   descriprion varchar
//   image_url list
//   cover_url varchar
//   price double
//   discount_id string [ref: <> Discount.id]
//   review_id string [ref: < ProductReviews.id]
//   specifications_id string [ref: - ProductSpecifications.id]
//   highlights list
//   is_favourite bool
//   is_available bool
//   is_deliverable bool
//   is_deleted bool
//   is_liked bool
//   created_at datetime
