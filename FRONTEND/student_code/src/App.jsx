// import { useState } from 'react'

import { RouterProvider } from 'react-router-dom'
import router from './router/index'

//import BookCard from "./components/BookCard/BookCard"
//import BookList from "./components/BookList/BookList"
//import SearchBar from './components/SearchBar/SearchBar'



function App() {
  return (
      <div>
        <RouterProvider router={router} />
      </div>
  )
}

export default App
