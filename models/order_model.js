const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Order = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primarykey: true,
   // defaultValue: sql.uuidV4,
  },
  products: {
    type: DataTypes.JSON,
  },
  total_amount: {
    type: DataTypes.DOUBLE,
  },
  user_id: {
    type: DataTypes.UUID,
  },
  shipping_address_id: {
    type: DataTypes.UUID,
  },
  ship_via: {
    type: DataTypes.UUID,
  },
  transaction_id: {
    type: DataTypes.UUID,
  },
  order_status: {
    type: DataTypes.ENUM,
  },
  order_date: {
    type: DataTypes.DATE,
  },
  delivered_on: {
    type: DataTypes.DATE,
  },
});

module.exports = Order;

// Table Order {
//     id string [primary key]
//     products list
//     total_amount double
//     user_id string [ref: > Users.id]
//     shipping_address_id string [ref: - Address.id]
//     ship_via string [ref:- Shipper.id]
//     transaction_id string
//     order_status varchar
//     order_date datetime
//     delivered_on datetime
//   }
