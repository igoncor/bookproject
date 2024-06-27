import { AppBar, Button } from '@mui/material'

// const options = [ "Home", "Profile", "login"]

import { Link } from 'react-router-dom';
import logo from '../../assets/logo_1.png'; 
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Dropdown from '../Dropdown/Dropdown';

function Header() {

  return (
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#6A5ACD' }}>
        <Toolbar>
         <Dropdown />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            {/* News */}
            <img src={logo} alt="Logo 1" style={{ width: '200px', height: '100px', marginBottom: '0px', marginTop: '0px' }} />
            {/* <img src={logo} alt="Logo 1" style={{ maxWidth: '100%', marginBottom: '20px' }} /> */}
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Link to="/sign-in" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Sign In</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header