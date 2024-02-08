
const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const transaction = sequelize.define({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  order_id: {
    type: Sequelize.UUID,
    required: true,
  },
  user_id: {
    type: Sequelize.UUID,
    required: true,
  },
  status: {
    type: Sequelize.STRING,
    required: true,
  },
  amount: {
    type: Sequelize.DOUBLE,
    required: true,
  },
  payment_details: {
    type: Sequelize.STRING,
  },
});


module.exports = transaction;    
 
// Table Transaction {
//     id string [primary key]
//     order_id string [ref: - Order.transaction_id]
//     user_id string [ref: > Users.id]
//     status varchar
//     amount double
//     payment_details string
//   }