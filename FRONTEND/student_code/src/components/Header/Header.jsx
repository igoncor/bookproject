import { AppBar, Button } from '@mui/material'

// const options = [ "Home", "Profile", "login"]

import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  const options = [ "Home", "Profile", "login"]
  return (
    // <AppBar position= 'sticky' sx= {{display: "flex", flexDirection: "row"}}>
    //    { options.map ((option, idx) => { 
    //      return <Button key={idx} sx= {{ color: "white"}}>
    //         {option}

    //      </Button>
    //    })} 
    // </AppBar>

       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header