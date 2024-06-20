import React from 'react'
//import { getUserProfile } from "../../services/userService"
import { useNavigate } from "react-router-dom" 
import { useState, useEffect } from "react"
import './Profile.css'

import { Box } from "@mui/material"


function Profile() { 
    const [user, setUser] = useState(null)
    const navigate = useNavigate() 
    const [profile, setProfile] = useState({}) //almacena la info del perfil del usuario. inicialmente es un objeto vacío

    
    async function getProfile() { // función que obtiene el perfil del usuario llamando a getUserProfile. es una función que hace la petición a la API
        const result = await getUserProfile();
        setProfile(result);
    }

    async function getBooks(id) { // función que obtiene los libros del usuario llamando a getBooks. también hace una petición a la API. id es el perfil del usuario
        const result = await getUserBooks(id);
        setBooks(result);
    }
    
    
    useEffect(() => { //para obtener datos del usuario
        const getUserData = async () => {
            const result = await getUserProfile()
            setUser(result)
        }
        getUserData()
    }, [])

    function onLogout() { //función de cierre de sesión que se llama al hacer clic en el botón de cerrar sesión
        localStorage.removeItem('token') //elimina el token del alamcenamiento local, lo que cierra la sesión
        navigate('/') //vuelve a la página de inicio
      }

  //return ( //renderizado
    //<div className="cuerpo">
        //<button onClick={onLogout}
        //className="logout-button">
        //    Cerrar sesión
        //</button>
          //  <h1>{localStorage.getItem('role') === 'admin' ? 'Admin' : 'Mi perfil'}</h1>

   // </div>
   return (
    <>
        <Box className="profileContainer">
        <button onClick={onLogout}
        className="logout-button">
            Cerrar sesión
        </button>
            <h1>{localStorage.getItem('role') === 'admin' ? 'Admin' : 'Mi perfil'}</h1>
        </Box>

        <Box className="wantedWrapper">
        <h2>Mis libros pendientes</h2>
        </Box>

        <Box className="favWrapper">
        <h2>Mis libros favoritos</h2>
        </Box>


    </>

  )
}




export default Profile