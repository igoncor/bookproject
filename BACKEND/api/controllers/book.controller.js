const User = require('../models/user.model')
const Book = require ('../models/book.model')


const getAllBooks = async (req, res) => {
  try {
    const books = await Books.findAll({
      where: req.query
    })

    if (!books) {
      res.status(404).json({
        message: 'No books found',
        result: books
      })
    }

    res.status(200).json({
      message: "All Books fetched",
      result: users,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting all books",
      result: error,
    });
  }
}

const getOneBook = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.id, {
      include: {
        model: ContactInfo
      }
    })

    if (!book) {
      res.status(404).json({
        message: "No book found",
        result: user,
      });
    }

    res.status(200).json({
      message: "Book fetched",
      result: book,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error getting one book",
      result: error,
    });
  }
};


module.exports = {
  getAllBooks,
  getOneBook, 
}