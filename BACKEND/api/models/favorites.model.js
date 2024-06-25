
const { connection } = require('../../database')

const Favorite = connection.define(
    "favorite",
    {
      
    },
    {
      timestamps: false
    }
  )
module.exports = Favorite