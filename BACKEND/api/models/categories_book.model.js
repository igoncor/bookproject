const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const categoriesBook = connection.define(
"categoriesBook",
{
    title: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, 
    {
    timestamps: false
    }
)

module.exports = categoriesBook