const { Sequelize } = require("sequelize");

//en este archivo se crea la instancia de la conexión de la base de datos con sequalizecon
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  });

