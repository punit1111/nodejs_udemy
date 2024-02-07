const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

module.exports = sequelize.define("users", {
  id: {
    type: Sequelize.UUID,
    //    allowNull: false,
    required: true,
    primaryKey: true,
  },
  email: {
    type: Sequelize.STRING,
    required: true, 
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
  //posts: [{ type: Sequelize.STRING, ref: "Product" }],
});
