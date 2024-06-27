import React from 'react';
import PropTypes from 'prop-types';

import './BookCard.css';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import { createFavorite } from '../../services/createFavoriteService';
import { createPending } from '../../services/createPendingService'

const labels = {};

function BookCard( { book } ) {
  
  const addToList = async (problema) => {
    try {
      console.log(problema)
      const response = await createFavorite(problema);
      if (response) {
        console.log('Book added to favorites:', response);
      }
    } catch (error) {
      console.error('Error adding book to favorites:', error);
    }
  };
 
  const addToPending = async (problema) => {
    try {
      console.log(problema)
      const response = await createPending(problema);
      if (response) {
        console.log('Book added to favorites:', response);
      }
    } catch (error) {
      console.error('Error adding book to favorites:', error);
    }
  };

  return (
    <div className="book-card">
      <img src={book.imageURL} alt={book.title} className="book-img" style={{ height: '300px', width: '150px' }} />
      <h3>{book.title}</h3> 
      {/* <p>{book.resumen}</p> */}      
      <p> {book.author.name} {book.author.surname}</p>
      {/* <p>Category ID: {book.categoriesBookId}</p> */}      
      <button onClick={() => addToList(book.id)}>Favoritos</button>
      <button onClick={() => addToPending (book.id)}>Pendientes</button>
      <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
       <Rating
        name="text-feedback"
        value={book.likes}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {/* <Box sx={{ ml: 2 }}>{labels[value]}</Box> */}
      <Box sx={{ ml: 2 }}>{labels[book.likes]}</Box>
    </Box>
    </div>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    resumen: PropTypes.string.isRequired,
    author_id: PropTypes.number.isRequired,
    category_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default BookCard