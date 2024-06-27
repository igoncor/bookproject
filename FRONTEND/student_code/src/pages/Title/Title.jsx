// import React from 'react'
// import { useState } from 'react';
// import BookList from '../../components/BookList/BookList'
// import SearchBar from '../../components/SearchBar/SearchBar'
// import Box from '@mui/material/Box';
// import './Titles.css'
// import CategoryBook from '../../components/CategoryBook/CategoryBook';

// function Title() {
  
// const [ search, setSearch ] = useState("")
// const [selectedCategory, setSelectedCategory] = useState("");

//  const searchBook = (text) => {
//     setSearch(text)
//   }
  
//  const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };



//   return (
//      <Box sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white' }}>
//       <SearchBar searchBook={searchBook} />
//       <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
//       <BookList search={search}  />
//     </Box>
//   )
// }

// export default Title




// import React, { useState } from 'react';
// import CategoryBook from '../../components/CategoryBook/CategoryBook';
// import BookList from '../../components/BookList/BookList';

// function Title() {
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value); 
//   };

//   return (
//     <div className="title-container">
//       <h1>Select Category</h1>
//       <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />     
//       <BookList selectedCategory={selectedCategory} />
//     </div>
//   );
// }

// export default Title;



import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryBook from '../../components/CategoryBook/CategoryBook';
import BookList from '../../components/BookList/BookList';

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
    <div>     
      <SearchBar searchBook={handleSearch} />
      <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <BookList search={searchTerm} selectedCategory={selectedCategory} />
    </div>
  );
}

export default Title;
