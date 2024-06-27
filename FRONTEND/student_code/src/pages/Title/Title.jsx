import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import CategoryBook from '../../components/CategoryBook/CategoryBook';
import BookList from '../../components/BookList/BookList';
import './Titles.css'
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
    <div className= "title-list">     
      <SearchBar searchBook={handleSearch} />
      <CategoryBook selectedCategory={selectedCategory} onChange={handleCategoryChange} />
      <BookList search={searchTerm} selectedCategory={selectedCategory} />
    </div>
  );
}

export default Title;
