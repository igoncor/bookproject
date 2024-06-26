import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBar({ searchBook }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
      <TextField
        label="Search Books"
        variant="outlined"
        onChange={(e) => searchBook(e.target.value)}
        sx={{
          width: '80%',
          maxWidth: '300px',
          marginTop: '10px',
          backgroundColor: 'white',
          borderRadius: 1,
          boxShadow: 1,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#cccccc',
            },
            '&:hover fieldset': {
              borderColor: '#aaaaaa',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#888888',
            },
          },
        }}
      />
    </Box>
  );
}

SearchBar.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default SearchBar;

