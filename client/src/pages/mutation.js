import React from 'react'
import { Grid, Typography } from '@mui/material'

const mutation = () => {
    return (
        <>
            <Grid container direction='row' sx={{ height: '30rem', bgcolor: 'red' }}>
                <Grid item xs={12} sx={{ bgcolor: 'red' }}>
                    <Typography sx={{fontSize:'50px', textAlign:'center',fontFamily:'Mulish'}} className='Degisimler'>
                        <i>DEĞİŞİMLER</i>
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ bgcolor: 'blue' }}>
                    selam
                </Grid>
            </Grid>
        </>
    )
}

export default mutation