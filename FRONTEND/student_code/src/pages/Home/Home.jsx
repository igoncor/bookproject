import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import BookCard from '../../components/BookCard/BookCard';
import { getAllBooks } from '../../services/titleService.js';
import Carousel from '../../components/Carousel/CarouselBook'
import Rank from '../../components/Rank/Rank'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const allBooks = await getAllBooks(); //Cogemos todos los libros
        // Filtrar los libros por las IDs específicas
        const filteredBooks = allBooks.filter(book => [12, 13, 10, 11, 17].includes(book.id));
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

  return (    
  <div>
    {/* <CarouselBook /> */}
      <Carousel />  
      {/* <p>You are in Home</p> */}
    <div className="read-this">
      <h2>Qué leer:</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>                 
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
