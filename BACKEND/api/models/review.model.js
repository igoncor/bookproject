const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Reviews = connection.define(
    "Review",
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