import React from 'react'
import {
    Box,
    Container,
    Grid,
    Typography
} from '@mui/material'
import '../../styles/TeamPage/TeamPage.css'

const team = (props) => {
    return (
        <>
            <Box className='body'>
                <Container className='cardBody'>
                    <Grid container direction={'row'}>
                        <Grid xs={12} sm={12} md={8} lg={8}>
                            <Grid container direction={'column'}>
                                <Grid lg={12}>
                                    <Grid container direction={'row'} className='personelName'>
                                        <Grid xs={12} sm={3} md={4} lg={3} justifyContent='start'>
                                            <Typography className='name'>
                                                {props.name}
                                            </Typography>
                                        </Grid>
                                        <Grid xs={12} sm={6} md={8} lg={5}>
                                            <Typography className={props.surname === 'ULUDOĞAN' ? 'surname' : props.surname === 'ÇETİN' ? 'surname2' : props.surname === 'SOFTWARE' ? 'surname3' : 'surname'}>
                                                {props.surname}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid xs={12} md={11}>
                                    <center>
                                        <Typography className='job'>
                                            {props.job}
                                        </Typography>
                                    </center>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid xs={12} md={4} lg={4}
                            sx={{ textAlign: { xs: 'end' } }}>
                            <img width={'260px'}
                                alt='...'
                                src={props.image}
                            />
                        </Grid>
                    </Grid>
                    <Grid xs={12} md={12}>
                        <Typography className='enesLife'>
                            {props.text} <br /> <br /> {props.text2} <br /> <br />  {props.text3}
                        </Typography>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default team