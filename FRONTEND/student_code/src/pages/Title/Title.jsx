import React from 'react'
import { useState } from 'react';
import BookList from '../../components/BookList/BookList'
import SearchBar from '../../components/SearchBar/SearchBar'


function Title() {
  
const [ search, setSearch ] = useState("")

 const searchBook = (text) => {
    setSearch(text)
  }
  
  return (
    <div className="title-container">
      
      <SearchBar searchBook={searchBook}/>
      <BookList search={search}/>
    </div>
  )
}

export default Title