import {
    Grid,
    Box,
    CardMedia
} from '@mui/material'
import React from 'react';

const Changes = (props) => {
    return (
        <Box className='pageBody'>
            <Grid lg={12} className='bodyContainer' textAlign={'center'}>
                <CardMedia
                    className='Cardimage'
                    component="img"
                    height="290"
                    image={props.media}
                />
            </Grid>
        </Box>
    )
}

export default Changes;