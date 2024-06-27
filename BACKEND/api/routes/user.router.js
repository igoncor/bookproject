const router = require("express").Router()
const {checkAuth} = require("../middlewares/middlewares")

const {
  getAllUsers,
  getOneUser,  
  createUser,
  updateOneUser,
  deleteOneUser
} = require('../controllers/user.controller')

router.get('/:id',
  checkAuth,
  getOneUser)
  router.get('/',
    checkAuth,
    getAllUsers)
  router.post('/',
    checkAuth,
    createUser)
  router.put('/:id',
    checkAuth,
    updateOneUser)
  router.delete('/:id',
    checkAuth,
    deleteOneUser)

module.exports = router

