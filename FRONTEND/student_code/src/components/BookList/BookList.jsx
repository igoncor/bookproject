import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getAllBooks } from '../../services/titleService';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BookCard from '../../components/BookCard/BookCard'

function BookList({ search, selectedCategory }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let data = await getAllBooks();
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
  );
}

BookList.propTypes = {
  search: PropTypes.string,
  selectedCategory: PropTypes.number,
};

export default BookList;
