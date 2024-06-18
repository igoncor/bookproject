const router = require("express").Router();
const {checkAuth} = require("../middlewares/middlewares");

const {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
  deleteReview
} = require('../controllers/review.controller')

  router.get('/',
    
    getAllReviews)
  router.get('/:id',
    
    getOneReview)
  router.post('/',
    checkAuth,
    createReview)
  router.put('/:id',
    checkAuth,
    updateReview)
  router.delete('/:id',
    checkAuth,
    deleteReview)
module.exports = router