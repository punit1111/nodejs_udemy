const DataTypes = require("sequelize").DataTypes;
const sequelize = require('../utils/database');

const ContactUs = sequelize.define({
    id: {
        type: DataTypes.UUID,
        primarykey: true, 
      //  defaultValue: sql.uuidV4,
    },
    issue_title: {
        type: DataTypes.STRING,
    },
    issue_description: {
        type: DataTypes.STRING, 
    },
    issue_topic: {
        type: DataTypes.STRING,
    }
});


module.exports = ContactUs; 



// Table ContactUs {
//     id string [primary key]
//     issue_title varchar
//     issue_description varchar
//     issue_topic varchar
//     faqs_id string [ref: < Faqs.id]
//   }