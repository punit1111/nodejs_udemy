const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const PaymentDetails = sequelize.define({
  id: {
    type: DataTypes.UUID,
//    defaultValue: sql.uuidv4,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  payment_mode: {
    type: DataTypes.STRING,
  },
  account_no: {
    type: DataTypes.STRING,
  },
  validity: {
    type: DataTypes.DATE,
  },
  payment_method: {
    type: DataTypes.STRING,
  },
  card_holder_name: {
    type: DataTypes.STRING,
  },
  card_number: {
    type: DataTypes.INTEGER,
  },
  cvv: {
    type: DataTypes.INTEGER,
  },
  upi_id: {
    type: DataTypes.STRING,
  },
  pan_number: {
    type: DataTypes.STRING,
  },
});

module.exports = PaymentDetails;

// Table PaymentDetails {
//     id string [primary key]
//     user_id string [ref: > Users.id]
//     payment_mode varchar
//     account_no varchar
//     validity datetime
//     payment_method varchar
//     card_holder_name varchar
//     card_number integer
//     cvv integer
//     upi_id varchar
//     pan_number varchar
//   }
