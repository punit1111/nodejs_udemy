const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

const seller = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  phone: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
    unique: "email",
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  status: {
    type: DataTypes.STRING,
    default: "Active",
  },
  usertype: {
    type: DataTypes.STRING,
    default: "Seller",
  },
  sell_category: {
    type: DataTypes.STRING,
  },
  adhaar_details: {
    type: DataTypes.STRING,
  },
  pan_details: {
    type: DataTypes.STRING,
  },
  payment_details_id: {
    type: DataTypes.UUID,
  },
});


module.exports = seller;  