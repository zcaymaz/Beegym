import { Typography, Grid, Link, Button, IconButton } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Navbar = () => {
  return (
    <>
      <Grid sx={{ display: { xs: 'flex', sm: 'flex', md: 'flex', lg: 'flex' } }}
        container direction={'row'} className="NavbarContainer">
        <Grid xs="1.5" sx={{ paddingLeft: { sm: '0', md: '2em' } }}>
          <img
            className='NavbarLogo'
            src={require('../../images/Logo-png.png')}
          />
        </Grid>
        <Grid alignItems={'center'} justifyContent={'flex-end'} container xs="10.5">                 {/* 10.8 */}
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Ana Sayfa</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Biyografi</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Online Eğitim</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item paddingRight={0.7}>
            <Link sx={{ textDecoration: 'none' }} href={'/'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">Blog</Typography>
              </Button>
            </Link>
          </Grid>
          <Grid item sx={{ paddingRight: { sm: '0', md: '5em' } }}>
            <Link sx={{ textDecoration: 'none' }} href={'/conctact'}>
              <Button className="navbarButton" variant="text">
                <Typography className="navbarButton" variant="navbar">İletişim</Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
export default Navbar;
