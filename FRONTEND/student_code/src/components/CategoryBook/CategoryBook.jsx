import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import './CategoryBook.css'; 

const categories = [
  { id: 1, name: 'Fantasía' },
  { id: 2, name: 'Misterio' },
  { id: 3, name: 'Terror' },
  { id: 4, name: 'Poesía' },
];

function CategoryBook({ selectedCategory, onChange }) {
  return (
    <Box className="category-box">
      <FormControl fullWidth className="category-form-control">
        <InputLabel
          id="category-select-label"
          className="category-select-label"
        >
          Categoría
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Categoría"
          onChange={onChange}
          className="category-select"
        >
          <MenuItem value="">
            <em>Todas</em>
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

CategoryBook.propTypes = {
  selectedCategory: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default CategoryBook;

