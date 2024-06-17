const router = require("express").Router()

const {
  getAllBooks,
  getOneBook, 
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthor
} = require('../controllers/book.controller')

// const {
//   checkAuth,
//   checkAdmin
// } = require('../middelwares')

// router.get('/', checkAuth, checkAdmin, getAllBooks)
router.get('/',  getAllBooks)
router.get('/:id', getOneBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

router.get('/author/:author_id', getBooksByAuthor)

module.exports = router

