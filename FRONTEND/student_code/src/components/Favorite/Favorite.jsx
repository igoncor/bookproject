import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import { getMyFavorites, deleteFavorite } from '../../services/favoriteService';


const useStyles = styled((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer:  {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  
}));


export default function Favorites() {
  const classes = useStyles();
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
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Mis Libros Favoritos
          </Typography>
          <Typography variant="body1" align="center" color="textSecondary" paragraph>
            Bienvenido a tu perfil. Aquí puedes encontrar tus libros favoritos mejor valorados.
            Estos son los libros que más te han gustado y que has decidido guardar en tu lista de favoritos.
            Disfruta explorando tus lecturas preferidas, revisa sus detalles y, si lo deseas, accede a más información sobre cada uno de ellos.
          </Typography>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {favorites.map((favorite, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ border: '5px solid yellow', padding: '4px',}}
              
              className={classes.card}>
                
                
                <CardMedia
                  className={classes.cardMedia}
                  component="img"
                  image={favorite.book.imageURL}// || "https://www.bing.com/images/search?view=detailV2&ccid=R93Or3NL&id=C1307C60EA113090201489178D16CFAEF832744E&thid=OIP.R93Or3NLjhihyni2_xRbFwHaE8&mediaurl=https%3a%2f%2fwww.wallpaperflare.com%2fstatic%2f512%2f909%2f111%2fbook-old-vintage-chipped-wallpaper.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.47ddceaf734b8e18a1ca78b6ff145b17%3frik%3dTnQy%252bK7PFo0XiQ%26pid%3dImgRaw%26r%3d0&exph=4000&expw=6000&q=book&simid=608043481585686858&FORM=IRPRST&ck=304537E6DA2EE8DE08E0613C9847C24B&selectedIndex=1&itb=0"}
                  title={favorite.book.title}
                  
                  
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2" >
                    {favorite.book.title}
                  </Typography>
                  <Typography>
                    {favorite.book.resumen}
                  </Typography>
                  
                </CardContent>
                <button  onClick={ async () => 
                
                {
                 await deleteFavorite(favorite.id)
                  fetchFavorites()
                }
                
                  
                }
                
                
                  >Borrar de Favoritos</button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  </React.Fragment>
);
}
