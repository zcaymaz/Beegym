import { Container, Grid, Typography, Box } from '@mui/material'
import React from 'react';

const Changes = (props) => {
    return (
        <Box className='changesPageBody'>
            <Container className='changesBodyContainer'>
                <Grid container direction={'row'} alignItems={'center'}>
                    <Grid xs={12} md={5} lg={5} textAlign={'center'} className='changesImageGrid'>
                    <Box padding={'10px'}>
                    
                        <img
                        alt='...'
                            className='changesCardImage'
                            component="img"
                            src={props.image}
                            style={{
                                width:'90%'
                            }}
                        />
                        </Box>
                    </Grid>
                    <Grid xs={12} md={7} lg={7} className='life'>
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