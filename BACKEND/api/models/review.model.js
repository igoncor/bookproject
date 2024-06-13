const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Reviews = connection.define(
    "Review",
    {
        user_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        review: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        point: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
      timestamps: false
    }
  )
    

module.exports = Reviews