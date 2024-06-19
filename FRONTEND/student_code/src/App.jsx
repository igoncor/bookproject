import { useState } from 'react'

import './App.css'

import BookCard from "./components/BookCard/BookCard"
import BookList from "./components/BookList/BookList"
import SearchBar from './components/SearchBar/SearchBar'
import Profile from "./pages/Profile"
import { RouterProvider } from 'react-router-dom'
import router from "./router"

function App() {
  return (
      <div>
        <RouterProvider router={router} />

      </div>
  )
}

export default App
