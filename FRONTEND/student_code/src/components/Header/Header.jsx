import { AppBar, Button } from '@mui/material'

// const options = [ "Home", "Profile", "login"]

import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Dropdown from '../Dropdown/Dropdown';
function Header() {

  return (
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         <Dropdown />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
          <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header