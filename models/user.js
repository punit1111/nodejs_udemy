const Sequelize = require("sequelize");

const sequelize = require("../utils/database");
 
module.exports = sequelize.define("users", {
  id: {
    type: Sequelize.UUID,
    //    allowNull: false,
    required: true,
    primaryKey: true,
  },
  phone: {
    type: Sequelize.STRING,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    required: true,  
    unique: 'email' 
  },
  password: {
    type: Sequelize.STRING, 
    required: true,
  },
  name: {
    type: Sequelize.STRING,
    required: true,
  },
  status: {
    type: Sequelize.STRING,  
    default: "Active" 
  },
  usertype: {
    type: Sequelize.STRING,
    default: "Customer"
  }
  //posts: [{ type: Sequelize.STRING, ref: "Product" }],
});


// Table Users { 
//   id string [primary key]
//   phone number 
//   email varchar
//   password varchar
//   fullname varchar
//   usertype varchar
//   address_id string [ref: < Address.id]
// }
