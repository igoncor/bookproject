// import { Box } from "@mui/material"
// import './Profile.css'
// import { getUserProfile } from "../../services/userService"
// import { useNavigate } from "react-router-dom" 
// import { useState, useEffect } from "react"


// function Profile() { 
//     const [setUser] = useState(null)
//     const navigate = useNavigate() 
//     useEffect(() => { //para obtener datos del usuario
//         const getUserData = async () => {
//             const result = await getUserProfile()
//             setUser(result)
//         }
//         getUserData()
//     }, )

//     function onLogout() { //función de cierre de sesión que se llama al hacer clic en el botón de cerrar sesión
//         localStorage.removeItem('token') //elimina el token del alamcenamiento local, lo que cierra la sesión
//         navigate('/') //vuelve a la página de inicio
//       }
//   return ( //renderizado
//     <>
//     <Box className="profileContainer">
//     <button onClick={onLogout}
//     className="logout-button">
//         Cerrar sesión
//     </button>
//         <h1>{localStorage.getItem('role') === 'admin' ? 'Admin' : 'Mi perfil'}</h1>
//     </Box>

//     <Box className="wantedWrapper">
//     <h2>Mis libros pendientes</h2>
//     </Box>

//     <Box className="favWrapper">
//     <h2>Mis libros favoritos</h2>
//     </Box>

// </>
//   )
// }


import "./Profile.css";
import { useState, useEffect } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Paper, Typography, Link, } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Container component="main" maxWidth="xl" className="mainContainer">
      <CssBaseline />
      <Paper className="paper" elevation={3}>
        <Avatar className="avatar">
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Mi perfil
        </Typography>
        <Box className="profileDetails">
          <Typography variant="h6">Pepe Grillo</Typography>
          <Typography variant="body1">pepito@gmail.com</Typography>
        </Box>
        <Button variant="contained" color="primary" className="button">
          Editar perfil
        </Button>
        <Button variant="contained" color="secondary" className="button">
          Cerrar sesión
        </Button>
      </Paper>
      
      <Box className="profileContainer">
        <Box className="favoriteBooks">
          <Typography variant="h6">Mis libros favoritos</Typography>
          <Grid container spacing={2} className="gridContainer">
            {[1, 2, 3, 4].map((book) => (
              <Grid item key={book} xs={12} sm={6}>
                <Paper className="bookCard">
                  <Typography variant="h6">Book Title {book}</Typography>
                  <Typography variant="body2">Book summary goes here...</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="pendientesBooks">
          <Typography variant="h6">Mis libros pendientes</Typography>
          <Grid container spacing={2} className="gridContainer">
            {[1, 2, 3, 4].map((book) => (
              <Grid item key={book} xs={12} sm={6}>
                <Paper className="bookCard">
                  <Typography variant="h6">Book Title {book}</Typography>
                  <Typography variant="body2">Book summary goes here...</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Box>
      <Box className="comments">
        <Typography variant="h6">Mis reseñas</Typography>
        <Typography variant="body2">Comment 1...</Typography>
        <Typography variant="body2">Comment 2...</Typography>
        <Typography variant="body2">Comment 3...</Typography>
      </Box>
    </Container>
  );
};

export default Profile;;
