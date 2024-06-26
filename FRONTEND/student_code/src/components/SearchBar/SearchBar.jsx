// import PropTypes from 'prop-types';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';

// function SearchBar({ searchBook }) {
//   return (
//     <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2, mb: 2 }}>
//       <TextField
//         label="Search Books"
//         variant="outlined"
//         onChange={(e) => searchBook(e.target.value)}
//         sx={{ width: '80%', maxWidth: '600px' }}
//       />
//     </Box>
//   );
// }

// SearchBar.propTypes = {
//   searchBook: PropTypes.func.isRequired,
// };

// export default SearchBar;





import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function SearchBar({ searchBook }) {
  return (
    <Box
      sx={{
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
      <TextField
        label="Buscar Libros"
        variant="outlined"
        onChange={(e) => searchBook(e.target.value)}
        sx={{
          width: '90%',
          maxWidth: '400px',
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
      />
    </Box>
  );
}

SearchBar.propTypes = {
  searchBook: PropTypes.func.isRequired,
};

export default SearchBar;
