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



import { useState, useEffect } from 'react';
import { Avatar, Box, Button, Container, CssBaseline, Grid, Paper, Typography, Link, } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = styled((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#333', // Dark background
    color: 'white', // White text
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    backgroundColor: '#424242', // Grey background for the card
    color: 'white', // White text color
    width: '100%', // Expand to full width
  },
  profileDetails: {
    marginBottom: theme.spacing(2),
  },
  favoriteBooks: {
    marginTop: theme.spacing(4),
    width: '70%', // Adjust width to fit within the screen
  },
  bookCard: {
    padding: theme.spacing(2),
    border: '1px solid #ccc',
    backgroundColor: '#616161', // Grey background for the book cards
  },
  timer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(4),
  },
  timerDisplay: {
    fontSize: '2rem',
    marginRight: theme.spacing(2),
  },
  profileContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: theme.spacing(4),
  },
  comments: {
    backgroundColor: '#424242',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    width: '50%', // Adjust width to fit within the screen
  },
  linkCard: {
    backgroundColor: '#424242',
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    color: 'white',
    flex: 1, // Ensures the card takes available space
    marginLeft: theme.spacing(2),
    width: '30%', // Adjust width to fit within the screen
  },
  link: {
    color: theme.palette.primary.main,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  }
}));

const Profile = () => {
  const classes = useStyles();
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
    <Container component="main" maxWidth="xl" className={classes.root}>
      <CssBaseline />
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          User Profile
        </Typography>
        <Box className={classes.profileDetails}>
          <Typography variant="h6">John Doe</Typography>
          <Typography variant="body1">johndoe@example.com</Typography>
          <Typography variant="body1">Age: 30</Typography>
          <Typography variant="body1">Reading Level: Advanced</Typography>
        </Box>
        <Button variant="contained" color="primary" className={classes.button}>
          Edit Profile
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Logout
        </Button>
      </Paper>
      <Box className={classes.timer}>
        <Typography className={classes.timerDisplay}>{seconds}s</Typography>
        <Button onClick={toggle} variant="contained" color="primary" className={classes.button}>
          {isActive ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={reset} variant="contained" color="secondary" className={classes.button}>
          Reset
        </Button>
      </Box>
      <Box className={classes.profileContainer}>
        <Box className={classes.favoriteBooks}>
          <Typography variant="h6">Favorite Books</Typography>
          <Grid container spacing={2} className={classes.gridContainer}>
            {[1, 2, 3, 4].map((book) => (
              <Grid item key={book} xs={12} sm={6}>
                <Paper className={classes.bookCard}>
                  <Typography variant="h6">Book Title {book}</Typography>
                  <Typography variant="body2">Book summary goes here...</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box className={classes.linkCard}>
          <Typography variant="h6">Check Reading Speed</Typography>
          <Typography variant="body2">Test your reading speed and see how fast you can read.</Typography>
          <Link href="/reading-speed-test" className={classes.link}>
            Start Reading Speed Test
          </Link>
        </Box>
      </Box>
      <Box className={classes.comments}>
        <Typography variant="h6">Comments on Favorite Books</Typography>
        <Typography variant="body2">Comment 1...</Typography>
        <Typography variant="body2">Comment 2...</Typography>
        <Typography variant="body2">Comment 3...</Typography>
      </Box>
    </Container>
  );
};

export default Profile;
