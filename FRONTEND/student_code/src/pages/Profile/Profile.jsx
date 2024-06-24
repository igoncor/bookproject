

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
    <div>
        <button onClick={onLogout}
        style={{
            position: 'fixed',
            top: '10px', 
            right: '10px'
        }}
        >
            Cerrar sesión
        </button>
            {localStorage.getItem('role') === 'admin' ? <h1>Admin</h1> : <h1>Mi perfil</h1>}
    </div>
  )
}



export default Profile





