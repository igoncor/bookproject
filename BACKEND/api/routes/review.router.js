const router = require("express").Router()

const {
  getAllReviews,
  getOneReview,
  createReview,
  updateReview,
  deleteReview
} = require('../controllers/review.controller')


router.get('/',  getAllReviews)
router.get('/:id', getOneReview)
router.post('/', createReview)
router.put('/:id', updateReview)
router.delete('/:id', deleteReview)
module.exports = router