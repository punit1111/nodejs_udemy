const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const WareHouse = sequelize.define({
    id: {
        type: Sequelize.UUID,
        primarykey: true,
       // defaultValue: sql.uuidV4, 
    },
    name: {
        type: Sequelize.STRING,  
    },
    open_time: {
        type: Sequelize.DATE, 
    },
    close_time: {
        type: Sequelize.DATE,
    },
    address: {
        type: Sequelize.UUID,
    }
});

module.exports = WareHouse;



// Table WareHouse {
//     id string [primary key]
//     name string 
//     open_time datetime
//     close_time datetime
//     address string [ref: - Address.id]
//   }