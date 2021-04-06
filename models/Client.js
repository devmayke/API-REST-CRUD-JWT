const Sequelize  = require("sequelize");
const connection = require("./database");


const Client = connection.define("client", {
    name:{
        type: Sequelize.STRING,
        allowNull:true
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull:true
    }
});

// Client.sync({force:true});

module.exports = Client;



