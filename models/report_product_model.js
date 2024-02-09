const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const ReportProduct = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primarykey: true,
    //defaultValue: sql.uuidV4,
  },
  product_id: {
    type: DataTypes.UUID,
  },
  user_id: {
    type: DataTypes.UUID,
  }, 
  reported_reasons: {
    type: DataTypes.JSON,
  },
});

module.exports = ReportProduct;

// Table ReportProduct {
//     id string [primary key]
//     product_id integer [ref: - Product.id]
//     user_id integer [ref: - Users.id]
//     reposrt_reason list
//   }
