import { Container, Grid, Typography, Box, CardMedia } from '@mui/material'
import React from 'react';

const Changes = (props) => {
    return (
        <Box className='pageBody'>
            <Container className='bodyContainer'>
                <Grid container direction={'row'}>
                    <Grid xs={12} lg={6} textAlign={'center'}>
                        <CardMedia
                            className='Cardimage'
                            component="img"
                            height="290"
                            image={props.media}
                        />
                    </Grid>
                    <Grid xs={12} lg={6} className='life'>
                        <Typography className='lifeText'>
                            {props.text}
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Changes