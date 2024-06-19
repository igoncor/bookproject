// import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'

function Root() {
  return (
    <div>
        <Header />
       
        {/* Outlet según la ruta en la que nos encontremos va a renderizar un comp u otro */}
        <Outlet/> 

        <Footer />
    </div>
  )
}

export default Root