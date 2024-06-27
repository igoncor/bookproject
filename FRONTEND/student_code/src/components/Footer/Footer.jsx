import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        {/* <Typography variant="h6" align="center" gutterBottom>
          La Ladrona de Libros
        </Typography> */}
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          {'© '}
          {new Date().getFullYear()}
          {' La Ladrona de Libros. Todos los derechos reservados.'}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Home
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            About
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Contact
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

