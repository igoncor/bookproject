const { DataTypes } = require("sequelize")
const { connection } = require('../../database')

const booksWanted = connection.define(
"booksWanted",
{
    user_id: { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, 
    {
    timestamps: false
    }
)

module.exports = booksWanted