const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Shipper = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primarykey: true,
   // defaultValue: sql.uuidV4,
  }, 
  name: {
    type: DataTypes.STRING, 
  },
  region: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
});

module.exports = Shipper;

// Table Shipper {
//     id string [primary key]
//     name string
//     region string
//     phone integer
//     email string
//   }
