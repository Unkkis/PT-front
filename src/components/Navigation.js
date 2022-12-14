import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Addcustomer from './Addcustomer';
import { Link } from"react-router-dom";

/*
This component source is https://mui.com/material-ui/react-app-bar/ "App Bar with responsive menu"
*/

const pages = [
  {name: 'Customers', href: '/customers'},
  {name: 'Trainings', href: '/trainings'},
  {name: 'Calendar', href: '/calendar'}, 
  {name: 'Charts', href: '/charts'}
];


function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" style={{ textDecoration: 'none', color:'white' }}>
           <Typography
            variant="h6"
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PT-FRONTTI
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link to={page.href} key={page.name} style={{ textDecoration: 'none' }}>
                <MenuItem key={page.name} onClick={handleCloseNavMenu} >
                  <Button>{page.name}</Button>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link to="/" style={{ textDecoration: 'none' , color:'white'}}>
           <Typography
            variant="h5"
            noWrap
            
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PT-FRONTTI
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.href} key={page.name} style={{ textDecoration: 'none' }}>
              <Button
               
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
               
              </Button>
              </Link>
            ))}
          </Box>
          <Addcustomer />
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default Navigation;