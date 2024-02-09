const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Coupen = sequelize.define({
  id: {
    type: DataTypes.UUID,
   // default: sql.uuidv4,
  },
  discount_id: {
    type: DataTypes.UUID,
  },
  applicable_users: {
    type: DataTypes.JSON,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  coupen_code: {
    type: DataTypes.STRING,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Coupen;

// Table Coupen {
//     id string [primary key]
//     discount_id string [ref: < Discount.id]
//     applicable_users list
//     title varchar
//     descriprion varchar
//     coupen_code varchar
//     is_active bool
//   }
