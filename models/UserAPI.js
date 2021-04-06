const Sequelize = require("sequelize");
const connection = require("./database");
// const bcrypt = require("bcrypt");


const UserAPI = connection.define("user", {
    name:{
        type:Sequelize.STRING,
        aloowNull:false
    },
    email:{
        type:Sequelize.STRING,
        aloowNull:false
    },
    password:{
        type:Sequelize.STRING,
        aloowNull:false
    },
})


// UserAPI.sync({force:true});

module.exports = UserAPI;


