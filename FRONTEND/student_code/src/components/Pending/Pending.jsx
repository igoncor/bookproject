// import React, { useState, useEffect } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
// import { getMyPendings, deletePending  } from '../../services/pendingService';




// const useStyles = styled((theme) => ({
  
//   icon: {
//     marginRight: theme.spacing(2),
//   },
  
//   heroContent: {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(8, 0, 6),
//   },
//   heroButtons: {
//     marginTop: theme.spacing(4),
//   },
//   cardGrid: {
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   card: {
//     height: '100%',
//     display: 'flex',
//     flexDirection: 'column',
    
//   },
//   cardMedia: {
//     paddingTop: '56.25%', // 16:9
//   },
//   cardContent: {
//     flexGrow: 1,
//   },
//   footer:  {
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(6),
//   },
  
// }));


// export default function Pending() {
//   const classes = useStyles();
//   const [pendings, setPending] = useState([]);


//   async function fetchPending() {
//     try {
//       const pendingIds = await getMyPendings();
     
//       setPending(pendingIds);
//     } catch (error) {
//       console.error("Error fetching pending books:", error);
//     }
//   }

//   useEffect(() => {
//     fetchPending();
//   }, []);


//   return (
//     <React.Fragment>
//     <CssBaseline />
//     <main>
//       <div className={classes.heroContent}>
//         <Container maxWidth="sm">
//           <Typography component="h1" variant="h2" align="center" color="blue" gutterBottom>
//           Mis Libros Pendientes
//           </Typography>
//           <Typography variant="body1" align="center" color="blue" paragraph>
//           Bienvenido a tu perfil. Aquí puedes encontrar tus libros pendientes que quieres leer.
//           Estos son los libros que más te interesan y que has decidido guardar en tu lista de pendientes.
//           Disfruta explorando tus próximas lecturas, revisa sus detalles y, si lo deseas, accede a más información sobre cada uno de ellos.
          
          
//           </Typography>
//         </Container>
//       </div>
//       <Container className={classes.cardGrid} maxWidth="md">
//         <Grid container spacing={4}>
//           {pendings.map((pending, index) => (
//             <Grid item key={index} xs={12} sm={6} md={4}>
//               <Card sx={{ border: '5px solid yellow', padding: '4px',}}
              
//               className={classes.card}>
                
                
//                 <CardMedia
//                   className={classes.cardMedia}
//                   component="img"
//                   image={pending.book.imageURL}
//                   title={pending.book.title}
                  
                  
//                 />
//                 <CardContent className={classes.cardContent}>
//                   <Typography gutterBottom variant="h5" component="h2" >
//                     {pending.book.title}
//                   </Typography>
//                   <Typography>
//                     {pending.book.resumen}
//                   </Typography>
                  
//                 </CardContent>
//                 <button  onClick={ async () => 
                
//                 {
//                  await deletePending(pending.id)
//                   fetchPending()
//                 }
                              
//                 }                
//                   >Borrar de Pendientes</button>
               
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </main>
//   </React.Fragment>
// );
// }


import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { getMyPendings, deletePending  } from '../../services/pendingService';





export default function Pending() {
  
  const [pendings, setPending] = useState([]);


  async function fetchPending() {
    try {
      const pendingIds = await getMyPendings();
     
      setPending(pendingIds);
    } catch (error) {
      console.error("Error fetching pending books:", error);
    }
  }

  useEffect(() => {
    fetchPending();
  }, []);


  return (
    <React.Fragment>
    <CssBaseline />
    <main>
      <div >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h3" align="center" color="white" gutterBottom >
          Mis Libros Pendientes
          </Typography>
          <Typography variant="body1" align="center" color="white" paragraph>
          Bienvenido a tu perfil. Aquí puedes encontrar tus libros pendientes que quieres leer.
          Estos son los libros que más te interesan y que has decidido guardar en tu lista de pendientes.
          Disfruta explorando tus próximas lecturas, revisa sus detalles y, si lo deseas, accede a más información sobre cada uno de ellos.
          
          
          </Typography>
        </Container>
      </div>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          {pendings.map((pending, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ border: '5px solid yellow', padding: '4px',}} >
                
                
                <CardMedia
                  
                  component="img"
                  image={pending.book.imageURL}
                  title={pending.book.title}
                  
                  
                />
               
                  <Typography gutterBottom variant="h4" component="h2" align="center"  >
                    {pending.book.title}
                  </Typography>
                  <Typography align="center" >
                    {pending.book.resumen}
                  </Typography>
                                  
                
                <div className="button-container">
                    <button
                      className="delete-button"
                      onClick={async () => {
                        await deletePending(pending.id)
                           fetchPending()
                      }}
                      >Borrar de Pendientes</button>
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


