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
//         model: ContactInfo
//       }
//     })

//     if (!book) {
//       res.status(404).json({
//         message: "No book found",
//         result: user,
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


module.exports = {
  getAllBooks,
   
}