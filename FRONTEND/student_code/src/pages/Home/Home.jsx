import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../../components/BookCard/BookCard';
import { getAllBooks } from '../../services/titleService.js';

import Rank from '../../components/Rank/Rank'
import './Home.css'
// import CarouselBook from '../../components/Carousel/CarouselBook.jsx'

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const allBooks = await getAllBooks(); //Cogemos todos los libros
        // Filtrar los libros por las IDs específicas
        const filteredBooks = allBooks.filter(book => [4, 2, 3, 7, 11, 20].includes(book.id));
        setBooks(filteredBooks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

   const topBooks = books.filter(book => book.likes === 5);
  // console.log('Número de libros con likes=5:', topBooks.length);
// console.log (books);
  return (    
  <div>
    {/* <CarouselBook /> */}
    
      <p>You are in Home</p>
    <div className="read-this">
      <h2>Qué leer:</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div> 
           
         {/* <div className="top-rank" style={{ border: '2px solid #f7b718', padding: '20px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)', marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
        <h2 style={{ color: '#f7b718', marginBottom: '15px' }}>Top-5:</h2>
        <ol style={{ textAlign: 'left', color: '#ffffff' }}>
          {topBooks.map((book) => (
            <li key={book.id}>{book.title} by {book.author.name} {book.author.surname}</li>
          ))}
        </ol>
      </div> */}
      <div className= "top-rank">
        <Rank />
      </div>
    </div>
  </div>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
      }).isRequired,
      imageURL: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
    })
  ),
};

export default BookList;
