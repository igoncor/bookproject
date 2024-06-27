const Favorite = require('../models/favorites.model');
const Book = require('../models/book.model');

const getAllFavorites = async (req, res) => {
    try {
      const favorite = await Favorite.findAll({
        where: req.query
      })
      if (!favorite) {
        res.status(404).json({
          message: 'No favorites found',
          result: favorites
        })
      }
      res.status(200).json({
        message: "All favorites fetched",
        result: favorite,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all favorites",
        result: error,
      });
    }
  }


  async function getOneFavorite(req, res) {
    try {
        const favorite = await Favorite.findByPk(req.params.id)
        if (favorite) {
            return res.status(200).json(favorite)
        } else {
            return res.status(404).send('Favorite not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createFavorite(req, res) {
	try {
		const favorite = await Favorite.create(
			{ bookId : req.body.bookId, userId : res.locals.user.id } 
		);
		return res.status(201).json({ message: 'Favorite has been created', favorite: favorite });
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function updateFavorite(req, res) {
	try {
		const [favoriteExist, favorite] = await Favorite.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (favoriteExist !== 0) {
			return res.status(200).json({ message: 'Favorite updated', favorite: favorite })
		} else {
			return res.status(404).send('Favorite not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteFavorite(req, res) {
	try {
		const rowsDeleted = await Favorite.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (rowsDeleted) {
			return res.status(200).json('Favorite deleted');
		} else {
			return res.status(404).send('Favorite not found');
		}
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

async function getMyFavorite (req,res){
	try {
	
		const result = await Favorite.findAll({
			where:{userId: res.locals.user.id},
			include:{model: Book}			
		})
		res.status(200).json(result)

	} catch (error) {
		res.status(500).send(error.message)
	}
}

module.exports = {
	getAllFavorites,
	getOneFavorite,
	createFavorite,
	updateFavorite,
	deleteFavorite,
	getMyFavorite
};