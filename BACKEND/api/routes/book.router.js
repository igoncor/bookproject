const router = require("express").Router()
const {checkAuth} = require("../middlewares/middlewares");

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
router.get('/',
  checkAuth,
  getAllBooks)
router.get('/:id', 
  checkAuth,
  getOneBook)
// router.post('/', createBook)
// router.put('/:id', updateOneBook)
// router.delete('/:id', deleteOneBook)

module.exports = router