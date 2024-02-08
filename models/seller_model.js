const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const seller = sequelize.define({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  phone: {
    type: Sequelize.STRING,
    required: true,
  },
  email: {
    type: Sequelize.STRING,
    required: true,
    unique: "email",
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
    default: "Active",
  },
  usertype: {
    type: Sequelize.STRING,
    default: "Seller",
  },
  sell_category: {
    type: Sequelize.STRING,
  },
  adhaar_details: {
    type: Sequelize.STRING,
  },
  pan_details: {
    type: Sequelize.STRING,
  },
  payment_details_id: {
    type: Sequelize.UUID,
  },
});


module.exports = seller;  