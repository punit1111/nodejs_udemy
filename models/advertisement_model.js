const DataTypes = require("sequelize").DataTypes;
const sequelize = require("../utils/database");

const Advertisement = sequelize.define({
    id:{
        type: DataTypes.UUID,
       // default: sql.uuidv4,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image_url: {
        type: DataTypes.STRING,
    },
    coupen_id: {
        type: DataTypes.UUID,
    },
    amount: {
        type: DataTypes.DOUBLE,
    },
}); 

module.exports = Advertisement;

// Table Advertisement {
//   id string [primary key]
//   title varchar
//   descriprion varchar
//   image_url varchar
//   coupen_id varchar [ref: <> Coupen.id]
//   amount double
// }