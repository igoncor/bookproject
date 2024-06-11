const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const authors = connection.define(
"author",
{
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
    }
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    }
    birth: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    death: 
        type: DataTypes.INTEGER,
        allowNUll: false,
    },
    
    {
    timestamps: false
    }
)

module.exports = Authors;