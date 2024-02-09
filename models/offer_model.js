const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Offer = sequelize.define({
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
  applicable_users: {
    type: DataTypes.JSON,
  },
  validity: {
    type: DataTypes.DATE,
  },
  is_active: {
    type: DataTypes.BOOLEAN,
  },
  bank_details: {
    type: DataTypes.UUID,
  },
});

module.exports = Offer;

// Table Offers {
//     id string [primary key]
//     title varchar
//     applicable_users list
//     descriprion varchar
//     percent double
//     bank_details varchar [ref: > BankDetails.id]
//   }
