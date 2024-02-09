const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const AboutUs = sequelize.define({
  id: { 
    type: DataTypes.UUID,
    primarykey: true,
  //  defaultValue: sql.uuidV4,
  },
  company_id: {
    type: DataTypes.UUID,
  }, 
  stories: {
    type: DataTypes.STRING,
  },
  ethics: { 
    type: DataTypes.STRING,
  },
  culture: {
    type: DataTypes.STRING,
  },
});

module.exports = AboutUs;

// Table AboutUs {
//     id string [primary key]
//     company_id integer [ref: - CompanyDetails.id]
//     stories list
//     ethics list
//     culture varchar
//   }
