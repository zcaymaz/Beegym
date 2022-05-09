import { Grid, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';

const Copyright = () => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className='Copyright'>
            ENES ULUDOGAN FİTNESS {'Copyright © '}
            {new Date().getFullYear()} All Right Are Reserved
            {'.'}
            <IconButton target={'_blank'} href={'https://www.instagram.com/enesuludoganfitness'}>
                <InstagramIcon sx={{ color: 'white' }} />
            </IconButton>
        </Grid>
    )
}
export default Copyright
