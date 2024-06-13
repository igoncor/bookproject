const router = require("express").Router()

const {
  getAllAuthors,
  getOneAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authors.controller')


router.get('/',  getAllAuthors)
router.get('/:id', getOneAuthor)
router.post('/', createAuthor)
router.put('/:id', updateAuthor)
router.delete('/:id', deleteAuthor)
module.exports = router