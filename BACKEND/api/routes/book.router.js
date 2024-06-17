const router = require("express").Router()
const {checkAuth} = require("../middlewares/middlewares");

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
<<<<<<< HEAD
router.get('/',  getAllBooks)
router.get('/:id', getOneBook)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

router.get('/author/:author_id', getBooksByAuthor)

module.exports = router
=======
router.get('/',
  checkAuth,
  getAllBooks)
router.get('/:id', 
  checkAuth,
  getOneBook)
// router.post('/', createBook)
// router.put('/:id', updateOneBook)
// router.delete('/:id', deleteOneBook)
>>>>>>> 6ef490f83e955400f1bad76f404cc9b874268016

