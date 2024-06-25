// Import necessary modules at the top
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getAllBooks } from '../../services/titleService.js';

// Define your Rank component
const Rank = ({ books }) => {
  // State to store top books
  const [topBooks, setTopBooks] = useState([]);

  // Effect to fetch books on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const allBooks = await getAllBooks();
        const filteredBooks = allBooks.filter(book => book.likes === 5).slice(0, 5);
        setTopBooks(filteredBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="top-rank" style={{ border: '2px solid #f7b718', padding: '20px', borderRadius: '10px', boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)', marginBottom: '20px', maxHeight: '400px', overflowY: 'auto' }}>
      <h2 style={{ color: '#f7b718', marginBottom: '15px' }}>Top-5:</h2>
      <ol style={{ textAlign: 'left', color: '#ffffff' }}>
        {topBooks.map((book) => (
          <li key={book.id}>{book.title} by {book.author.name} {book.author.surname}</li>
        ))}
      </ol>
    </div>
  );
};

// PropTypes for type checking
Rank.propTypes = {
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

export default Rank; // Exporting the Rank component

