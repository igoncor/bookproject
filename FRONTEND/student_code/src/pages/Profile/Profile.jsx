


import "./Profile.css";
import { useState, useEffect } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Paper, Typography,} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getOneUser,} from '../../services/userService';

const Profile = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, ] = useState(false);




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
 
  
  const [users, setUsers] = useState([]);

  async function fetchusers() {
    try {
      const userIds = await getOneUser(localStorage.getItem('userId'));
     
      setUsers(userIds);

      console.log(userIds)
    } catch (error) {
      console.error("Error fetching user books:", error);
    }
  }

  useEffect(() => {
    fetchusers();
  }, []);


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
        
          <Box  className="profileDetails">
            <Typography variant="h6">{users.name}</Typography>
            <Typography variant="body1">{users.email}</Typography>
          </Box>
       

      <Button variant="text" className="button">Editar perfil</Button>
      <Button variant="text" className="button">Cerrar sesión</Button>
    </Paper>

    <Box className="profileContainer">
      <Box className="favoriteBooks">
        <Typography variant="h6">Mis libros favoritos</Typography>
        <Grid container spacing={2} className="gridContainer">
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">El Símbolo Perdido</Typography>
             
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Tormenta de Espadas</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Choque de Reyes</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Juego de Tronos</Typography>
              
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className="pendientesBooks">
        <Typography variant="h6">Mis libros pendientes</Typography>
        <Grid container spacing={2} className="gridContainer">
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Origen</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Inferno</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Ángeles y Demonios</Typography>
              
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className="bookCard">
              <Typography variant="h6">Festín de Cuervos</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

    </Box>

    
  </Container>
);
};

export default Profile;

