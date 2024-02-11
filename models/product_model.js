const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

const ProductCategory = require("../models/product_category_model");

const Product = sequelize.define("products", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },
  seller_id: {
    type: DataTypes.UUID,
    allowNull: true,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cover_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true,
  },
  highlights: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  is_favourite: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  is_available: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  is_deliverable: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  is_liked: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
});

Product.associate = () => {
  Product.belongsTo(ProductCategory, {
    foreignKey: ProductCategory.id,
  });
};

module.exports = Product;
