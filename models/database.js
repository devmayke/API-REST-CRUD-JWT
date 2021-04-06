const Sequelize = require("sequelize");



const connection = new Sequelize("client-api", "root", "Codebase1@1",{
    host:"localhost",
    dialect: "mysql",
    timezone:"-03:00"
});

module.exports = connection;