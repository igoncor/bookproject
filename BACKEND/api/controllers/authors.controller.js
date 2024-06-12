const Authors = require('../models/authors.model');
//const Book = require ('../models/book.model')

const getAllAuthors = async (req, res) => {
    try {
      const authors = await Authors.findAll({
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
        result: users,
      })
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting all authors",
        result: error,
      });
    }
  }

  const getOneAuthor = async (req, res) => {
    try {
      const author = await Author.findByPk(req.params.id, {
        include: {
          model: ContactInfo
        }
      })
  
      if (!author) {
        res.status(404).json({
          message: "No author found",
          result: user,
        });
      }
  
      res.status(200).json({
        message: "Author fetched",
        result: author,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: "Error getting one author",
        result: error,
      });
    }
  };

// async function createAuthor(req, res) {
// 	try {
// 		const author = await Authors.create({
// 			name: req.body.name,
// 			surname: req.body.surname,
// 			country: req.body.country,
// 			birth: req.body.birth,
// 			death: req.body.death,
// 		});
// 		return res.status(201).json({ message: 'Author created', author: author });
// 	} catch (error) {
// 		res.status(500).send(error.message);
// 	}
// }

// async function updateAuthor(req, res) {
// 	try {
// 		const [rowsUpdated, [updatedAuthor]] = await Authors.update(req.body, {
// 			returning: true,
// 			where: {
// 				id: req.params.id,
// 			},
// 		});
// 		if (rowsUpdated !== 0) {
// 			return res.status(200).json({ message: 'Author updated', author: updatedAuthor });
// 		} else {
// 			return res.status(404).send('Author not found');
// 		}
// 	} catch (error) {
// 		return res.status(500).send(error.message);
// 	}
// }

// async function deleteAuthor(req, res) {
// 	try {
// 		const rowsDeleted = await Authors.destroy({
// 			where: {
// 				id: req.params.id,
// 			},
// 		});
// 		if (rowsDeleted) {
// 			return res.status(200).json('Author deleted');
// 		} else {
// 			return res.status(404).send('Author not found');
// 		}
// 	} catch (error) {
// 		return res.status(500).send(error.message);
// 	}
// }

module.exports = {
	getAllAuthors,
	getOneAuthor,
	// createAuthor,
	// updateAuthor,
	// deleteAuthor,
};