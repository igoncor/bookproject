const { DataTypes } = require("sequelize")
const { connection } = require('../../database')
 // Instancia de la conexión generado en el archivo index.js de la carpeta database

 const User = connection.define (
    "user",{ 
    name: {
        type: DataTypes.STRING,
        alowNull: false,
         },
     nickName: {
        type: DataTypes.STRING,
        alowNull: false,
     },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM('user', 'admin'), // Definimos 'user' y 'admin' como los únicos valores válidos para la columna 'role'
      defaultValue: 'user'
    },
    bio: {
        type: DataTypes.STRING,
    }, 


  }, {
    timestamps: false
     // Indicamos que no queremos generar las columnas de 'fecha de creación' ni de 'fecha de última actualización'
  }
);

module.exports = User