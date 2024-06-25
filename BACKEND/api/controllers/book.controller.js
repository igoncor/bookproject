const { application } = require('express')
const Book = require ('../models/book.model')
const Author = require ('../models/authors.model.js')
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll(
      { include: Author}      
    )
    

    if (!books) {
      res.status(404).json({
        message: 'No books found',
        result: books
      })
    }

    res.status(200).json({
      message: "All Books fetched",
      result: books,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all books",
      result: error,
    });
  }
}

const getBooksByAuthor = async (req, res) => {
  const { author_id } = req.params; // Suponemos que author_id se pasa como parámetro en la URL

  try {
    const books = await Book.findAll({
      where: {
        author_id: author_id
      }
    });

    if (!books || books.length === 0) {
      return res.status(404).json({
        message: 'No books found for the given author',
        result: books
      });
    }

    res.status(200).json({
      message: 'Books fetched successfully',
      result: books,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error getting books for the given author',
      result: error,
    });
  }
}

  

// const getOneBook = async (req, res) => {
//   try {
//     const book = await Book.findByPk(req.params.id, {
//       include: {
//         model: book
//       }
//     })

//     if (!book) {
//       res.status(404).json({
//         message: "No book found",
//         result:book,
//       });
//     }

//     res.status(200).json({
//       message: "Book fetched",
//       result: book,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({
//       message: "Error getting one book",
//       result: error,
//     });
//   }
// };

async function getOneBook(req, res) {
	try {
		const book = await Book.findByPk(req.params.id)
		if (book) {
			return res.status(200).json(book)
		} else {
			return res.status(404).send('Book not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createBook(req, res) {
    try {
        const book = await Book.create(req.body)
        return res.status(200).json({ message: 'Book created', book: book })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateBook (req, res) {
    try {
        const [bookExist, film] = await Book.update(req.body, {
            returning: true,
            where: {
                id: req.params.id,
            },
        })
        if (bookExist !== 0) {
            return res.status(200).json({ message: 'Book has been updated', bookExist })
            
        } else {
            return res.status(404).send('Book has not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function deleteBook(req, res) {
    try {
        const book = await Book.destroy({
            where: {
                id: req.params.id,
            },
        })
        if (book) {
            return res.status(200).json('Book has been deleted')
        } else {
            return res.status(404).send('Book has not found')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}





module.exports = {
  getAllBooks,
  getOneBook, 
  createBook,
  updateBook,
  deleteBook,
  getBooksByAuthor
}

