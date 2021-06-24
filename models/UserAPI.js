const Sequelize = require("sequelize");
const connection = require("./database");
// const bcrypt = require("bcrypt");


const UserAPI = connection.define("user", {
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
})


// UserAPI.sync({force:true});

module.exports = UserAPI;


