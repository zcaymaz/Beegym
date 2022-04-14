import { Grid, Typography, Stack, AppBar, Container, Box, Link, Button } from '@mui/material'

const Navbar = () => {
  return (
    <>
      <AppBar position="static">
        <Container className='NavbarContainer' maxWidth="xxl">
          <Grid container direction="row">
            <Grid xs="1">
              <Box sx={{ float: 'right' }}>
                <img
                  className='NavbarLogo'
                  src={require('../../images/Logo-png.png')}
                />
              </Box>
            </Grid>
            <Grid xs="1" />
            <Grid container xs="9" paddingTop={3}>
              <Grid item paddingRight={1} paddingLeft={1}>
                <Link sx={{ textDecoration: 'none' }} href={'/home'}>
                  <Button className="navbarButton" variant="text">
                    <Typography className="navbarButton" variant="navbar">Ana Sayfa</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item paddingRight={1} paddingLeft={1}>
                <Link sx={{ textDecoration: 'none' }} href={'/'}>
                  <Button className="navbarButton" variant="text">
                    <Typography className="navbarButton" variant="navbar">Biyografi</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item paddingRight={1} paddingLeft={1}>
                <Link sx={{ textDecoration: 'none' }} href={'/'}>
                  <Button className="navbarButton" variant="text">
                    <Typography className="navbarButton" variant="navbar">Online Eğitim</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item paddingRight={1} paddingLeft={1}>
                <Link sx={{ textDecoration: 'none' }} href={'/'}>
                  <Button className="navbarButton" variant="text">
                    <Typography className="navbarButton" variant="navbar">Blog</Typography>
                  </Button>
                </Link>
              </Grid>
              <Grid item paddingRight={1} paddingLeft={1}>
                <Link sx={{ textDecoration: 'none' }} href={'/conctact'}>
                  <Button className="navbarButton" variant="text">
                    <Typography className="navbarButton" variant="navbar">İletişim</Typography>
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </>
  )
}
export default Navbar;
