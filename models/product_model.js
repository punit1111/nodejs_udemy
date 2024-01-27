const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

//const ProductCategory = require("../models/product_category_model");

const Product = sequelize.define("product", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  category_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: {
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
  cover_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
});

// Product.hasOne(ProductCategory, {
//   foreignKey: ProductCategory.category_id,
// });

module.export = Product;

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
