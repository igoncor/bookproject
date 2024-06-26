import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './BookList.css';
import BookCard from '../BookCard/BookCard'; 
import getAllBooks from '../../services/titleService'; 


const BookList = ( { search }) => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const booksData = await getAllBooks();
                if (Array.isArray(booksData)) { // Ensure booksData is an array
                    setBooks(booksData);                    
                } else {
                    throw new Error('API response is not an array');
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);
console.log(books)
      const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(search.toLowerCase())
  );

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="book-list">
            <h2>List of Books:</h2>
            <div className="book-grid">
                {/* {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))} */}
            {filteredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ) )}        

       {/* <ul>
      {filteredBooks.map(book => (
        <li key={book.id}>{book.title}</li>
      ))}
      </ul> */}
            </div>
        </div>
    );
};



BookList.propTypes = {
  search: PropTypes.string.isRequired,
};

export default BookList;

