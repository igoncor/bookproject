const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
  getAllFavorites,
  getOneFavorite,
  createFavorite,
  updateFavorite,
  deleteFavorite,
  getMyFavorite
} = require('../controllers/favorite.controller')

router.get('/me',
  checkAuth,
  getMyFavorite)  
  
router.delete('/:id',
    checkAuth,
    deleteFavorite)

router.get('/',
  checkAuth,
  getAllFavorites)

router.get('/:id', 
  checkAuth,
  getOneFavorite)

router.post('/',
  checkAuth, 
  createFavorite)
router.put('/:id',
  checkAuth,
  updateFavorite)
module.exports = router