
import PropTypes from 'prop-types';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';

const categories = [
  { id: 1, name: 'Fantasía' },
  { id: 2, name: 'Misterio' },
  { id: 3, name: 'Terror' },
  { id: 4, name: 'Poesía' },
];

function CategoryBook({ selectedCategory, onChange }) {
  return (
    <Box
      sx={{
        height: '100px',
        width: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 2,
        mb: 2,
        p: 2,
        backgroundColor: '#f9f9f9',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <FormControl fullWidth sx={{ width: '100%', maxWidth: '400px', height: '100px' }}>
        <InputLabel
          id="category-select-label"
          sx={{
            fontSize: '0.5rem', // Increased font size
            fontWeight: 'bold', // Make the label bold
            transform: 'scale(1.5)', // Scale up the label
           
          }}
        >
          Categoría
        </InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          label="Categoría"
          onChange={onChange}
          sx={{
            width: '90%',
            maxWidth: '200px',
            heigh: '150px',
            backgroundColor: 'white',
            borderRadius: 1,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#dddddd',
              },
              '&:hover fieldset': {
                borderColor: '#cccccc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#bbbbbb',
              },
            },
          }}
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
