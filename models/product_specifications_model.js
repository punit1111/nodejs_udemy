
const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const product_specifications = sequelize.define({
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
  },
  product_id: {
    type: Sequelize.UUID,
  },
  quantity: {
    type: Sequelize.INTEGER,
  },
  colors: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  material_used: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  },
  warrenty: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
  features: {
    type: Sequelize.ARRAY(Sequelize.STRING),
  }
});


module.exports = product_specifications;  



// Table ProductSpecifications {
//     id string [primary key]
//     product_id string [ref: - Product.id]
//     quantity integer
//     colors list
//     material_used list
//     warrenty varchar 
//     brand string [ref: - Brand.id]
//     features list
//   }
