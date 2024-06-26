// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

// import './BookList.css';
// import BookCard from '../BookCard/BookCard'; 
// import getAllBooks from '../../services/titleService'; 


// const BookList = ( { search }) => {
//     const [books, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchBooks = async () => {
//             try {
//                 const booksData = await getAllBooks();
//                 if (Array.isArray(booksData)) { // Ensure booksData is an array
//                     setBooks(booksData);                    
//                 } else {
//                     throw new Error('API response is not an array');
//                 }
//             } catch (error) {
//                 setError(error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchBooks();
//     }, []);
// console.log(books)
//       const filteredBooks = books.filter(book => 
//     book.title.toLowerCase().includes(search.toLowerCase())
//   );

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error.message}</p>;

//     return (
//         <div className="book-list">
//             <h2>List of Books:</h2>
//             <div className="book-grid">
//                 {/* {books.map(book => (
//                     <BookCard key={book.id} book={book} />
//                 ))} */}
//             {filteredBooks.map(book => (
//               <BookCard key={book.id} book={book} />
//             ) )}        

//        {/* <ul>
//       {filteredBooks.map(book => (
//         <li key={book.id}>{book.title}</li>
//       ))}
//       </ul> */}
//             </div>
//         </div>
//     );
// };



// BookList.propTypes = {
//   search: PropTypes.string.isRequired,
// };

// export default BookList;





// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { getAllBooks } from '../../services/titleService.js';
// import CategoryBook from '../../components/CategoryBook/CategoryBook'; 

// function BookList({ selectedCategory }) {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     async function fetchBooks() {
//       try {
//         let data = await getAllBooks();       
//         if (selectedCategory) {
// // console.log(typeof selectedCategory)
// // console.log(typeof data[0].categoriesBookId)
// console.log('Probando data:', data)
//           data = data.filter(book => book.categoriesBookId === parseInt(selectedCategory));
//        console.log('Probando selectedCategory:', selectedCategory);
//            console.log('Probando data después de filter:', data)
//         }      
//         setBooks(data);
//       } catch (error) {
//         console.error('Error fetching books:', error);
//       }
//     }
   

//     fetchBooks();
//   }, [selectedCategory]);

//   // const filteredBooks = books.filter(book =>
//   // console.log(books)
   

//   return (
//     <div>
//       <h2>Lista de Libros:</h2>
//       <ul>
//         {books.map((book) => (
//           <li key={book.id}>
//             <h3>{book.title}</h3>           
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// BookList.propTypes = {
//   selectedCategory: PropTypes.number,
// };

// export default BookList;






import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllBooks } from '../../services/titleService';
<<<<<<< HEAD
import SearchBook from '../../components/SearchBar/SearchBar'
=======
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BookCard from '../../components/BookCard/BookCard'
>>>>>>> home

function BookList({ search, selectedCategory }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let data = await getAllBooks();
<<<<<<< HEAD

        // Filtrar por categoría si hay una categoría seleccionada
        if (selectedCategory) {
          data = data.filter((book) => book.categoriesBookId === selectedCategory);
        }

        // Filtrar por término de búsqueda si hay un término de búsqueda
        if (search) {
          data = data.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
          );
        }

        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search, selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Lista de Libros:</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <h3>{book.title}</h3>
          </li>
        ))}
      </ul>
    </div>
=======
        if (selectedCategory) {
          data = data.filter((book) => book.categoriesBookId === selectedCategory);
        }
        if (search) {
          data = data.filter((book) => book.title.toLowerCase().includes(search.toLowerCase()));
        }
        setBooks(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [search, selectedCategory]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2>Lista de Libros:</h2>
      <Grid container spacing={2}>
        {books.map((book) => (
          <Grid item xs={12} sm={6} md={4} lg={2.4} key={book.id}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Box>
>>>>>>> home
  );
}

BookList.propTypes = {
  search: PropTypes.string,
  selectedCategory: PropTypes.number,
};

export default BookList;
