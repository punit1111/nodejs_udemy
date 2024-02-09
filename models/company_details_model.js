const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const CompanyDetails = sequelize.define({
  id: {
    type: DataTypes.UUID,
    primarykey: true,
  //  defaultValue: sql.uuidV4,
  },
  title: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
  },
  vision: {
    type: DataTypes.STRING,
  },
  objectives: {
    type: DataTypes.STRING,
  },
  cover_url: {
    type: DataTypes.STRING,
  },
  image_url: {
    type: DataTypes.STRING,
  },
  ceo_details: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
}); 

module.exports = CompanyDetails;

// Table CompanyDetails {
//     id string [primary key]
//     title varchar
//     descriprion varchar
//     visions varchar
//     objectives list
//     cover_url varchar
//     image_url varchar
//     ceo_details varchar
//     address varchar [ref: - Address.id]
//     telephone integer
//   }
