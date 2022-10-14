import { Grid, IconButton, Stack, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const Footer = () => {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='Footer'>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '16px' }}>
                        <i>ENES ULUDOGAN FİTNESS</i>
                    </Typography>
                </Grid>
                <Stack direction={'row'}>
                    <IconButton target={'_blank'} href={'https://www.instagram.com/enesuludoganfitness'}>
                        <InstagramIcon fontSize='large' sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton target={'_blank'} href={'https://api.whatsapp.com/send?phone=905339170698'}>
                        <WhatsAppIcon fontSize='large' sx={{ color: 'white' }} />
                    </IconButton>
                    <IconButton className='aciklama' href="#" data-title="enesuludoganfitness@gmail.com" sx={{ color: 'white' }}>
                        <EmailIcon fontSize='large' sx={{ color: 'white' }} />
                    </IconButton>
                </Stack>
                <Grid item xs={12}>
                    <Typography sx={{ fontSize: '11px' }}>
                        {'Copyright © '}
                        {new Date().getFullYear()} All Right Are Reserved{'.'}
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}
export default Footer