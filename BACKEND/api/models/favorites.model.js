const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Favorite = connection.define(
    "Favorite",
    {
        user_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      timestamps: false
    }
  )
module.exports = Favorite