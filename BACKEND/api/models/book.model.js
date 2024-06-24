const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Book = connection.define(
"book",
{
    title: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    summary: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNUll: false,
    },
    image: {
         type: DataTypes.STRING,
         allowNUll: true
    }
},  
    {
    timestamps: false
    }
)

module.exports = Book