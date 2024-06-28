// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

// import { Link } from 'react-router-dom';
// import './Dropdown.css'
// export default function Dropdown() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         <IconButton
//             size="large"
//             edge="start"
//             color="white"
//             aria-label="primary"
//             sx={{ mr: 2 , color: 'white' }}
//           >
//             <MenuIcon />
//           </IconButton> 
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <MenuItem onClick={handleClose} component={Link} to="/home">Home</MenuItem>
//         <MenuItem onClick={handleClose} component={Link} to="/profile">Perfil</MenuItem>
//         <MenuItem onClick={handleClose} component={Link} to="/titles">Libros</MenuItem>
//         <MenuItem onClick={handleClose} component={Link} to="/pendings">Pendientes</MenuItem>
//         <MenuItem onClick={handleClose} component={Link} to="/favorites">Favoritos</MenuItem>        
//       </Menu>
//     </div>
//   );
// }





import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <IconButton
          size="large"
          edge="start"
          color="white"
          aria-label="primary"
          sx={{ mr: 2, color: 'white' }}
        >
          <MenuIcon />
        </IconButton>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/home">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          Perfil
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/titles">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          Libros
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/pendings">
          <ListItemIcon>
            <PendingIcon />
          </ListItemIcon>
          Pendientes
        </MenuItem>
        <MenuItem onClick={handleClose} component={Link} to="/favorites">
          <ListItemIcon>
            <FavoriteIcon />
          </ListItemIcon>
          Favoritos
        </MenuItem>
      </Menu>
    </div>
  );
}



