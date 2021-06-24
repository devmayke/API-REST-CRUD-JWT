const Sequelize = require("sequelize");



const connection = new Sequelize("apihybr", "root", "Codebase1@1",{
    host:"localhost",
    dialect: "mysql",
    timezone:"-03:00"
});

module.exports = connection;