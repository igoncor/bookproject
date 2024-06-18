const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Favorite = connection.define(
    "Favorite",
    {
      
    },
    {
      timestamps: false
    }
  )
module.exports = Favorite