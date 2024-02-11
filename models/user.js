const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

module.exports = sequelize.define("users", {
  id: {
    type: DataTypes.UUID,
    //    allowNull: false,
    required: true,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
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
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM,
    defaultValue: "active",
    values: ["active", "pending", "deleted"],
    allowNull: true,
  },
  usertype: {
    type: DataTypes.ENUM,
    defaultValue: "active",
    values: ["active", "pending", "deleted"],
    allowNull: true,
  },
  addres: {
    type: DataTypes.JSON,
    default: {},
    allowNull: true,
  },
  course_range: {
    type: DataTypes.JSON,
    default: {},
    allowNull: true,
  },
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
