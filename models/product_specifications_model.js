const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

const product_specifications = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  product_id: {
    type: DataTypes.UUID,
  },
  quantity: {
    type: DataTypes.INTEGER,
  },
  colors: {
    type: DataTypes.JSON,
  },
  material_used: {
    type: DataTypes.JSON,
  },
  warrenty: {
    type: DataTypes.STRING,
  },
  brand: {
    type: DataTypes.STRING,
  },
  features: {
    type: DataTypes.JSON,
  },
});

module.exports = product_specifications;

// Table ProductSpecifications {
//     id string [primary key]
//     product_id string [ref: - Product.id]
//     quantity integer
//     colors list
//     material_used list
//     warrenty varchar
//     brand string [ref: - Brand.id]
//     features list
//   }
