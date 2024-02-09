
const DataTypes = require("sequelize").DataTypes;
const sequelize = require('../utils/database');


const CartItem = sequelize.define({
    id: {
        type: DataTypes.UUID, 
        primarykey: true,
       // defaultValue: sql.uuidV4,
    },
    product_id: {
        type: DataTypes.UUID,
        unique: true,
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    expected_delivery: {
        type: DataTypes.DATE,
    },
    is_address_deliverable: {
        type: DataTypes.BOOLEAN,
    },
    is_cod_available:{
        type: DataTypes.BOOLEAN,
    },
    discount_id:{
        type: DataTypes.UUID,
        allowNull: true,
    },
    coupen_id:{
        type: DataTypes.UUID,
        allowNull: true,
    },
    offer_id:{
        type: DataTypes.UUID,
        allowNull: true,
    },
    delivery_charges:{
        type: DataTypes.DOUBLE,
        allowNull: true,
    },

});


module.exports = CartItem; 

// Table CartItem {
//     id string [primary key]
//     product_id string [ref: < Product.id]
//     quantity integer
//     expected_delivery datetime
//     is_deliverable bool
//     is_cod_available bool 
//     discount_id string [ref: < Discount.id]
//     coupen_id string [ref: < Coupen.id]
//     Offer_id string [ref: < Offers.id]
//     delivery_charges double
//   }
  