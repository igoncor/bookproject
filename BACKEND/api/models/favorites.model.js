const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Favorites = connection.define(
    "Favorite",
    {
        user_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        }
    },
    {
      timestamps: false
    }
  )

module.exports = Favorites