const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const userBooks = connection.define(
    "userBooks",
    {
        user_id: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        read: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
    }, 
        {
        timestamps: false
        }
    )
    
    module.exports = userBooks