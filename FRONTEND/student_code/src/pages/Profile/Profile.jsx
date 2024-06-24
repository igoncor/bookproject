import { Box } from "@mui/material"
import './Profile.css'
import { getUserProfile } from "../../services/userService"
import { useNavigate } from "react-router-dom" 
import { useState, useEffect } from "react"


function Profile() { 
    const [setUser] = useState(null)
    const navigate = useNavigate() 
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
  return ( //renderizado
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
