// import React from 'react'
// import { useState } from 'react';
// import BookList from '../../components/BookList/BookList'
// import SearchBar from '../../components/SearchBar/SearchBar'


// function Title() {
  
// const [ search, setSearch ] = useState("")

//  const searchBook = (text) => {
//     setSearch(text)
//   }
  
//   return (
//     <div className="title-container">
      
//       <SearchBar searchBook={searchBook}/>
//       <BookList search={search}/>
//     </div>
//   )
// }

// export default Title









import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryBook from '../../components/CategoryBook/CategoryBook';
import BookList from '../../components/BookList/BookList';
import Box from '@mui/material/Box';

function Title() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        p: 3,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <SearchBar searchBook={handleSearch} />
      <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <BookList search={searchTerm} selectedCategory={selectedCategory} />
    </Box>
  );
}

export default Title;
