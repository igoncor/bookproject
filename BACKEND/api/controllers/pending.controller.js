
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

async function createPending(req, res) {
	try {
		const pending = await booksWanted.create(
			{ bookId : req.body.bookId, userId : res.locals.user.id } 
		);
		return res.status(201).json({ message: 'Pending Book has been created', favorite: favorite });
	} catch (error) {
		res.status(500).send(error.message);
	}
}
async function updatePending(req, res) {
	try {
		const [booksWanted, pending] = await booksWanted.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (PendingExist !== 0) {
			return res.status(200).json({ message: 'Pending updated', pending: pending })
		} else {
			return res.status(404).send('Pending not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getMyPendings,
	deletePending,
	createPending,
	updatePending
}