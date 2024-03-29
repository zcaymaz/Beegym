import React from "react";
import { Typography, Grid, Link, Button, IconButton, Menu, MenuItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../images/Logo-png.png';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex' } }}
        container direction={'row'} className="NavbarContainer">
        <Grid xs="1.5" sx={{ paddingLeft: { sm: '0', md: '2em' } }}>
          <Link href="/">
            <img className="NavbarLogo" src={Logo} alt='logo' />
          </Link>
        </Grid>
        <Grid alignItems={'center'} justifyContent={'flex-end'} container xs="10.5">                 {/* 10.8 */}
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">AnaSayfa</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/team'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Ekİbİmİz</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/packets'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Paketler</Typography>
              </Button>
            </Link>
          </Grid>
          {/* <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/blog'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Blog</Typography>
              </Button>
            </Link>
          </Grid> */}
          <Grid item sx={{ paddingRight: { sm: '0', md: '5em' } }}>
            <Link sx={{ textDecoration: 'none' }} href={'/market'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Mağaza</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Mobile Menu */}
      <Grid sx={{ display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none' } }}
        container direction={'row'} className="NavbarContainer">
        <Grid xs="1.5" sx={{ paddingLeft: { xs: '1em', sm: '2em' } }}>
          <img className="NavbarLogo" src={Logo} alt='logo' />
        </Grid>
        <Grid container xs="10.5" alignItems={'center'}>
          <Grid item xs="12">
            <IconButton
              id="demo-positioned-button"
              aria-controls={open ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleOpen}
              sx={{ float: 'right' }}>
              <MenuIcon sx={{ color: '#fff' }} fontSize="large" />
            </IconButton>
            <Menu
              id="demo-positioned-menu"
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'sub',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'sub',
                horizontal: 'right',
              }}>
              <MenuItem>
                <Link className="menuItemLink" href={'/'}>
                  <Typography className="menuItemText">AnaSayfa</Typography>
                </Link>
              </MenuItem>
             
              <MenuItem>
                <Link className="menuItemLink" href={'/team'}>
                  <Typography className="menuItemText">Ekİbİmİz</Typography>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link className="menuItemLink" href={'/packets'}>
                  <Typography className="menuItemText">Paketler</Typography>
                </Link>
              </MenuItem>
              {/* <MenuItem>
                <Link className="menuItemLink" href={'/blog'}>
                  <Typography className="menuItemText">Blog</Typography>
                </Link>
              </MenuItem>
              <center><Divider className="NavbarDivider" /></center>
               */}
              <MenuItem>
                <Link className="menuItemLink" href={'/market'}>
                  <Typography className="menuItemText">Mağaza</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default Navbar;
