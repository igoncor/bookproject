const router = require("express").Router()
const {checkAuth} = require("../middlewares/middlewares");
const {
  getAllAuthors,
  getOneAuthor,
  createAuthor,
  updateAuthor,
  deleteAuthor
} = require('../controllers/authors.controller')

router.get('/', 
    checkAuth,
    getAllAuthors)
router.get('/:id', 
    checkAuth,
    getOneAuthor)
router.post('/',
    checkAuth,
    createAuthor)
router.put('/:id',
    checkAuth,
    updateAuthor)
router.delete('/:id',
    checkAuth, 
    deleteAuthor)
module.exports = router