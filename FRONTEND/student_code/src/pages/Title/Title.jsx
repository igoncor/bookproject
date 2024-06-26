// import React from 'react'
// import { useState } from 'react';
// import BookList from '../../components/BookList/BookList'
// import SearchBar from '../../components/SearchBar/SearchBar'
<<<<<<< HEAD
// import Box from '@mui/material/Box';
// import './Titles.css'
// import CategoryBook from '../../components/CategoryBook/CategoryBook';

// function Title() {
  
// const [ search, setSearch ] = useState("")
// const [selectedCategory, setSelectedCategory] = useState("");
=======


// function Title() {
  
// const [ search, setSearch ] = useState("")
>>>>>>> home

//  const searchBook = (text) => {
//     setSearch(text)
//   }
  
<<<<<<< HEAD
//  const handleCategoryChange = (event) => {
//     setSelectedCategory(event.target.value);
//   };



//   return (
//      <Box sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white' }}>
//       <SearchBar searchBook={searchBook} />
//       <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
//       <BookList search={search}  />
//     </Box>
=======
//   return (
//     <div className="title-container">
      
//       <SearchBar searchBook={searchBook}/>
//       <BookList search={search}/>
//     </div>
>>>>>>> home
//   )
// }

// export default Title




<<<<<<< HEAD
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
=======


>>>>>>> home



import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryBook from '../../components/CategoryBook/CategoryBook';
import BookList from '../../components/BookList/BookList';
<<<<<<< HEAD
=======
import Box from '@mui/material/Box';
>>>>>>> home

function Title() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

<<<<<<< HEAD
  return (    
    <div>     
      <SearchBar searchBook={handleSearch} />
      <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <BookList search={searchTerm} selectedCategory={selectedCategory} />
    </div>
=======
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
>>>>>>> home
  );
}

export default Title;
<<<<<<< HEAD

=======
>>>>>>> home
