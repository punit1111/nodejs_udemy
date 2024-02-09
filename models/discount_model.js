const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Discount = sequelize.define({
  id: {
    type: DataTypes.UUID,
    //default: sql.uuidv4,
  }, 
  name: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  percent: {
    type: DataTypes.DOUBLE,
  },
  status: {
    type: DataTypes.STRING,
  },
  validity: {
    type: DataTypes.DATE,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  },
});

module.exports = Discount;

// Table Discount {
//     id string [primary key]
//     name varchar
//     descriprion varchar
//     percent double
//     status bool
//     validity datetime
//     is_active bool
//   }
