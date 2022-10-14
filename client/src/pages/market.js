import { Grid, Typography } from '@mui/material'
import React from 'react'

const market = () => {
    return (
        <>
            <Grid container direction={'row'} sx={{ height: '75vh' }}>
                <Grid xs={12} direction={'row'} sx={{ alignItems: 'center' }}>
                    <Typography sx={{ textAlign: 'center', bgcolor: 'red', height: '100%', alignItems: 'center' }}>
                        Çok Yakında
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default market