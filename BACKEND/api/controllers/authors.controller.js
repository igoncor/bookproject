const Author = require('../models/authors.model');
//const Book = require ('../models/book.model')

const getAllAuthors = async (req, res) => {
    try {
      const authors = await Author.findAll({
        where: req.query
      })
  
      if (!authors) {
        res.status(404).json({
          message: 'No authors found',
          result: authors
        })
      }
  
      res.status(200).json({
        message: "All Authors fetched",
        result: authors,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all authors",
        result: error,
      });
    }
  }


  async function getOneAuthor(req, res) {
    try {
        const author = await Author.findByPk(req.params.id)
        if (author) {
            return res.status(200).json(author)
        } else {
            return res.status(404).send('Author not found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createAuthor(req, res) {
	try {
		const author = await Author.create({
			name: req.body.name,
			surname: req.body.surname,
			country: req.body.country,
			birth: req.body.birth,
			death: req.body.death,
		});
		return res.status(201).json({ message: 'Author created', author: author });
	} catch (error) {
		res.status(500).send(error.message);
	}
}

async function updateAuthor(req, res) {
	try {
		const [authorExist, author] = await Author.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (authorExist !== 0) {
			return res.status(200).json({ message: 'Author updated', author: author })
		} else {
			return res.status(404).send('Author not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteAuthor(req, res) {
	try {
		const rowsDeleted = await Author.destroy({
			where: {
				id: req.params.id,
			},
		});
		if (rowsDeleted) {
			return res.status(200).json('Author deleted');
		} else {
			return res.status(404).send('Author not found');
		}
	} catch (error) {
		return res.status(500).send(error.message);
	}
}

module.exports = {
	getAllAuthors,
	getOneAuthor,
	createAuthor,
	updateAuthor,
	deleteAuthor,
};