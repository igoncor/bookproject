import React from 'react'
import { useState } from 'react';
import BookList from '../../components/BookList/BookList'
import SearchBar from '../../components/SearchBar/SearchBar'
import Box from '@mui/material/Box';
import './Titles.css'

function Title() {
  
const [ search, setSearch ] = useState("")

 const searchBook = (text) => {
    setSearch(text)
  }
  
  return (
     <Box sx={{ bgcolor: '#121212', minHeight: '100vh', color: 'white' }}>
      <SearchBar searchBook={searchBook} />
      <BookList search={search} />
    </Box>
  )
}

export default Title