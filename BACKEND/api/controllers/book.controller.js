const Book = require ('../models/book.model')

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll()

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



module.exports = {
  getAllBooks,
  getOneBook, 
  createBook,
}



  