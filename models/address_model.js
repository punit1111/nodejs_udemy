const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Address = sequelize.define({
  id: {
    type: DataTypes.UUID,
   // defaultValue: sql.uuidV4,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false, 
  },
  address_line_one: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address_line_two: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postal_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Address;
 
// Table Address {
//     id string [primary key]
//     user_id  string [ref: > Users.id]
//     address_line_one varchar
//     address_line_two varchar
//     city varchar
//     state varchar
//     postal_code integer
//     phone integer
//     country varchar
//   }
