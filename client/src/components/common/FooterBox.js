import { Grid, } from '@mui/material'
import Copyright from './Copyright'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const FooterBox = () => {
    return (

        <>
            <Grid
                sx={{ backgroundColor: "#3F3F3F", color: "#ffff", paddingTop: "20px", paddingBottom: "20px" }}
                container
                direction="row"
                alignItems="flex-center"
            >
                <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}><InstagramIcon />/IgId</Grid>
                <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}><EmailIcon />EuFitness@gmail.com</Grid>
                <Grid item sm={4} xs={12} sx={{ textAlign: "center" }}><PersonAddIcon />Hemen Katıl</Grid>
            </Grid>
            <Grid
                className='Copybox'
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-center"
                maxWidth="100%"
            >
                <Copyright />
            </Grid>
        </>
    )
}
export default FooterBox;