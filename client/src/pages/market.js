import React from 'react';
import Home from './home';
import  { Typography,Box } from '@mui/material'


const market = () => {
  return (
       <>
       <Box sx={{
         backgroundColor:'#000000'
       }}>
       <Box className='marketBody'>
          <Typography className='marketText'>Çok yakında hİzmetİnİzdeyİz...</Typography>
          </Box>
          <Home />
          </Box>
       </>
  )
}

export default market;