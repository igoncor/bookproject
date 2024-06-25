import React, { useEffect, useState } from 'react';
import './BookList.css';
import BookCard from '../BookCard/BookCard'; 
import getAllBooks from '../../services/titleService'; 


const BookList = () => {
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="book-list">
            <h2>List of Books:</h2>
            <div className="book-grid">
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default BookList;

