const DataTypes = require("sequelize").DataTypes;

const sequelize = require("../utils/database");

const brand = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  brand_name: {
    type: DataTypes.STRING, 
  },
  model_name: {
    type: DataTypes.STRING,
  },
});

module.exports = brand;
