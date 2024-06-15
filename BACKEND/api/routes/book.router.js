const router = require("express").Router()

const {
  getAllBooks,
  getOneBook, 
  createBook,
  updateOneBook,
  deleteOneBook
} = require('../controllers/book.controller')

// const {
//   checkAuth,
//   checkAdmin
// } = require('../middelwares')

// router.get('/', checkAuth, checkAdmin, getAllBooks)
router.get('/',  getAllBooks)
router.get('/:id', getOneBook)
router.post('/', createBook)
// router.put('/:id', updateOneBook)
// router.delete('/:id', deleteOneBook)

module.exports = router