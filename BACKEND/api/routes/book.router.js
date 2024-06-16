const router = require("express").Router()

const {
  getAllBooks,
  getOneBook, 
  createBook,
  updateBook,
  deleteBook
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

module.exports = router

