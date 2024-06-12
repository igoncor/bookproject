const router = require("express").Router()

const {
  getAllUsers,
  getOneUser,  
  createUser,
  updateOneUser,
  deleteOneUser
} = require('../controllers/user.controller')

// const {
//   checkAuth,
//   checkAdmin
// } = require('../middelwares')

// router.get('/', checkAuth, checkAdmin, getAllUsers)
router.get('/', getAllUsers)
router.get('/:id', getOneUser)
router.post('/', createUser)
router.put('/:id', updateOneUser)
router.delete('/:id', deleteOneUser)

module.exports = router

