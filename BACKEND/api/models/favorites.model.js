const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Favorites = connection.define(
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

module.exports = Favorites