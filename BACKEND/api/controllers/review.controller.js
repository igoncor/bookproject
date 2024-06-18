const Review = require('../models/review.model');


const getAllReviews = async (req, res) => {
    try {
      const review = await Review.findAll({
        where: req.query
      })
  
      if (!review) {
        res.status(404).json({
          message: 'No review found',
          result: review
        })
      }
  
      res.status(200).json({
        message: "All Review fetched",
        result: review,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all review",
        result: error,
      });
    }
  }


  async function getOneReview(req, res) {
    try {
        const review = await Review.findByPk(req.params.id)
        if (review) {
            return res.status(200).json(review)
        } else {
            return res.status(404).send('Review not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createReview(req, res) {
	try {
		const review = await Review.create(
			req.body
			
		);
		return res.status(201).json({ message: 'Review created', review: review });
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function updateReview(req, res) {
	try {
		const [reviewExist, review] = await Review.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (reviewExist !== 0) {
			return res.status(200).json({ message: 'Review updated', review: review })
		} else {
			return res.status(404).send('Review not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteReview(req, res) {
	try {
		const rowsDeleted = await Review.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (rowsDeleted) {
			return res.status(200).json('Review deleted');
		} else {
			return res.status(404).send('Review not found');
		}
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

module.exports = {
	getAllReviews,
	getOneReview,
	createReview,
	updateReview,
	deleteReview,
};