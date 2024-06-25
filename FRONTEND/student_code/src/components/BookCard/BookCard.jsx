import React from 'react';
import PropTypes from 'prop-types';

import './BookCard.css';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

import getAllBooks from '../../services/titleService'; 
import getAllAuthors from '../../services/titleService';

const labels = {
  // 0.5: 'Useless',
  // 1: 'Useless+',
  // 1.5: 'Poor',
  // 2: 'Poor+',
  // 2.5: 'Ok',
  // // 3: 'Ok+',
  // 3.5: 'Good',
  // 4: 'Good+',
  // 4.5: 'Excellent',
  // 5: 'Excellent+',
};

function BookCard( { book } ) {
  let value = 1;
  return (
    <div className="book-card">
      <img src={book.imageURL} alt={book.title} className="book-img" style={{ height: '300px', width: '150px' }} />
      <h3>{book.title}</h3> 
      {/* <p>{book.resumen}</p> */}      
      <p> {book.author.name} {book.author.surname}</p>
      {/* <p>Category ID: {book.categoriesBookId}</p> */}      
      <button onClick={() => addToList(book)}>Add to List</button>
      {/* <button onClick={() => removeToList(book)}>Remove from List</button> */}
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