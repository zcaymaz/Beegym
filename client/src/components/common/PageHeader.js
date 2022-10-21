import React from 'react'
import { Box, Typography } from '@mui/material'

const PageHeader = (props) => {
    return (
        <>
            <Box sx={{ height: { xs: '100px', md: '150px' } }} className='packetsNav'>
                <Typography className='packetsNavText'
                    sx={{
                        lineHeight: { xs: '100px', md: '150px' },
                        fontSize: { xs: '40px', md: '50px' }
                    }}>
                    {props.text}
                </Typography>
            </Box>
        </>
    )
}

export default PageHeader