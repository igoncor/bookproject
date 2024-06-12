const router = require("express").Router()

const {
  getAllAuthors,
  getOneAuthor,
 
} = require('../controllers/Authors.controller')


router.get('/',  getAllAuthors)
router.get('/:id', getOneAuthor)


module.exports = router