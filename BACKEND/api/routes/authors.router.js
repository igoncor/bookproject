const router = require("express").Router()

const {
  getAllAuthors,
  getOneAuthor,
 
} = require('../controllers/authors.controller')


router.get('/',  getAllAuthors)
router.get('/:id', getOneAuthor)


module.exports = router