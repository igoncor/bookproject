
const booksWanted = require('../models/books_wanted.model');
const Book = require('../models/book.model');


async function getMyPendings (req,res){
	try {
	
		const result = await booksWanted.findAll({
			where:{userId: res.locals.user.id},
			include:{model: Book}			
		})
		res.status(200).json(result)

	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function deletePending(req, res) {
	try {
		const rowsDeleted = await booksWanted.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (rowsDeleted) {
			return res.status(200).json('Pending deleted');
		} else {
			return res.status(404).send('Pending not found');
		}
	} catch (error) {
		return res.status(500).send(error.message);
	}
}
module.exports = {
	getMyPendings,
	deletePending
}