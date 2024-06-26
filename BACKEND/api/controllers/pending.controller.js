
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


module.exports = {
	getMyPendings
}