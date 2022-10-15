import { Grid, Typography } from '@mui/material'
import React from 'react'

const market = () => {
    return (
        <>
            <Grid container alignItems={'center'} sx={{ height: '90vh', bgcolor:'#ffdede' }}>
                <Grid xs={12}>
                    <Typography variant='h2' className='animate-charcter'
                    sx={{ textAlign: 'center', width:'100%', height:'100%', fontWeight:'700' }}>
                        Çok Yakında
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default market