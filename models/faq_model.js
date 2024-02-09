const DataTypes = require("sequelize").DataTypes;
const sequelize = require('../utils/database');

const Faq = sequelize.define({
    id: {
        type: DataTypes.UUID,
        primarykey: true,
       // defaultValue: sql.uuidV4,
    },
    question: {
        type: DataTypes.STRING,
    },
    answer: {
        type: DataTypes.STRING, 
    },
});


module.exports = Faq; 



// Table Faqs {
//     id string [primary key]
//     question varchar
//     answer varchar
//   }