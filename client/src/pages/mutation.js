import React from 'react'
import { Grid, Typography } from '@mui/material'
import MutationCard from '../components/common/MutationCard'
import {
    antrenman,
    beslenme,
} from '../images'

const mutation = () => {
    return (
        <>
            <Grid container spacing={1} direction='row' alignItems="center" sx={{ height: '30rem', bgcolor: 'red' }}>
                {/* <Grid item xs={12} sx={{ bgcolor: 'red' }}>
                    <Typography sx={{fontSize:'50px', textAlign:'center',fontFamily:'Mulish'}} className='Degisimler'>
                        <i>DEĞİŞİMLER</i>
                    </Typography>
                </Grid> */}
                <Grid item xs={4}>
                    <MutationCard
                        image={beslenme}
                    />
                </Grid>
                <Grid item xs={4}>
                    <MutationCard
                        image={antrenman}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default mutation