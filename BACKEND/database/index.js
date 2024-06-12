const { Sequelize } = require("sequelize");

//en este archivo se crea la instancia de la conexión de la base de datos con sequalizecon
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  });

const checkDB = async () => {
  try {
    await connection.authenticate()
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:')
    console.error(error)
  }
}

const syncModels = async () => {
  try {
    await connection.sync()
    console.log('Models syncrhonized!')
  } catch (error) {
    console.error("Unable to sync models:")
    console.error(error)
  }
}



module.exports = {
  connection,
  checkDB,
  syncModels
}