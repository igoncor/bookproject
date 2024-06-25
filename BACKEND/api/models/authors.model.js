const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const Author = connection.define(
"author",
{
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birth: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    death: {
        type: DataTypes.STRING,
        
    },
}, 
    {
    timestamps: false
    }
)

module.exports = Author