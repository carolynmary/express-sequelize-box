//=== INITIATION THE CONNECTION TO MYSQL =========================
const { Sequelize } = require("sequelize");

const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/config.json")[env];

let sequelize;

//  NEED TO TEST THE JAWSDB CONNECTION ***************************************************************************************
if (process.env.JAWSDB_URL) {
   console.log("Inside Process JAWSDB"),
   sequelize = new Sequelize("vf9bmk358q593g6u", "caojl3asz5f9zr5c", "farnp08ik6pozqp8", config);
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