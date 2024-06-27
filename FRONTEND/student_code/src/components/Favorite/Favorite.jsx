

import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { getMyFavorites, deleteFavorite } from '../../services/favoriteService';





export default function Favorites() {
  
  const [favorites, setFavorites] = useState([]);


  async function fetchFavorites() {
    try {
      const favoriteIds = await getMyFavorites();
     
      setFavorites(favoriteIds);
    } catch (error) {
      console.error("Error fetching favorite books:", error);
    }
  }

  useEffect(() => {
    fetchFavorites();
  }, []);


  return (
    <React.Fragment>
    <CssBaseline />
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center" color="white" gutterBottom>
            Mis Libros Favoritos
          </Typography>
          <Typography variant="body1" align="center" color="white" paragraph>
            Bienvenido a tu perfil. Aquí puedes encontrar tus libros favoritos mejor valorados.
            Estos son los libros que más te han gustado y que has decidido guardar en tu lista de favoritos.
            Disfruta explorando tus lecturas preferidas, revisa sus detalles y, si lo deseas, accede a más información sobre cada uno de ellos.
          </Typography>
        </Container>
      </div>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {favorites.map((favorite, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ border: '5px solid yellow', padding: '4px',}}
              
              >
                     
                <CardMedia
                  
                  component="img"
                  image={favorite.book.imageURL}
                  title={favorite.book.title}      
                  
                />
          
                  <Typography gutterBottom variant="h4" component="h2" align="center" >
                    {favorite.book.title}
                  </Typography>
                  <Typography align="center">
                    {favorite.book.resumen}
                  </Typography>
                  
                
                  <div className="button-container">
                    <button
                      className="delete-button"
                      onClick={async () => {
                        await deleteFavorite(favorite.id);
                        fetchFavorites();
                      }}
                    >
                      Borrar de Favoritos
                    </button>
                  </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </React.Fragment>
);
}
