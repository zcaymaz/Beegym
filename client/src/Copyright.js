import { Grid, Box } from '@mui/material';
import React from 'react'


const Copyright = () => {
    return (
        <Grid
            sx={{ paddingBottom: "15px" }}
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-center"
            className='Copyright'>
            ENES ULUDOGAN FİTNESS {'Copyright © '}
            {new Date().getFullYear()} All right are Reserved
            {'.'}
        </Grid>
    )
}
export default Copyright
