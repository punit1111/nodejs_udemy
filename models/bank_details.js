const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const BankDetails = sequelize.define({
  id: {
    type: DataTypes.UUID,
   // defaultValue: sql.uuiv4, 
  },
  name: {  
    type: DataTypes.STRING, 
  },
  account_no: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.UUID, 
  },
});

module.exports = BankDetails;

// Table BankDetails {
//     id string [primary key]
//     name varchar
//     account_no varchar
//     address varchar [ref: - Address.id]
//   }
