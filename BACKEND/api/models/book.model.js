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
    resumen: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    likes: 
        type: DataTypes.INTEGER,
        allowNUll: false,
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
    {
    timestamps: false
    }
)

module.exports = Book