const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const ItemAvailability = sequelize.define({
  product_id: {
    type: DataTypes.UUID,
    primarykey: true,
    //defaultValue: sql.uuidV4,
  },
  warehouse_id: {
    type: DataTypes.UUID,
    primarykey: true,
    defaultValue: sql.uuidV4,
  },
  available_quantity: {
    type: DataTypes.INTEGER,
  },
  min_quantity: {
    type: DataTypes.INTEGER, 
  },
  max_quantity: {
    type: DataTypes.INTEGER,
  },
});

module.exports = ItemAvailability;

// Table ItemAvailability {
//     product_id string [ref: - Product.id]
//     warehouse_id string [ref: > WareHouse.id ]
//     quantity_available integer
//     min_quantity integer
//     max_quantity integer
//   }
