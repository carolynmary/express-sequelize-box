//=== INITIATION THE CONNECTION TO MYSQL =========================
// const { Sequelize } = require("sequelize");
require("dotenv").config();
const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];

let sequelize;

// //  NEED TO TEST THE JAWSDB CONNECTION ***************************************************************************************
if (config.use_env_variable) {
   sequelize = new Sequelize(process.env[config.use_env_variable], config);
   console.log("JAWSDB CONNECTION");
} else {
   sequelize = new Sequelize("polls", "root", "password", {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
      pool: {
         max: 5,
         min: 0,
         idle: 10000
      }
   });
   console.log("LOCAL CONNECTION");

}

//=== EXPORTS THE CONNECTION FOR OTHER FILES TO USE ===============
module.exports = sequelize;