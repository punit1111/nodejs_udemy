const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const ProductCategory = require("../models/product_category_model");

const Product = sequelize.define("products", {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true,
  },
  category_id: {
    type: Sequelize.UUID, 
    allowNull: true,
  },
  seller_id: {
    type: Sequelize.UUID,
    allowNull: true,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
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
  highlights: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  is_favourite: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_available: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_deliverable: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_deleted: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
  is_liked: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  },
});

Product.associate = () => {
  Product.belongsTo(ProductCategory, {
    foreignKey: ProductCategory.id,
  });
};

module.exports = Product;
