import React from 'react'
import { Typography, Grid, Box, Card, Divider } from '@mui/material'


const Blog = () => {
    return (
        <>
            <Divider
                sx={{
                    backgroundColor: 'yellow'
                }}
            />
            <Box className='blogheader'>
                <center>
                    <Typography className='blogheadertext'>
                        Blog
                    </Typography>
                </center>
                <img
                    className='blogimage'
                    src={require('../images/blogPage.jpeg')}
                />
            </Box>

            <Card className='blogCard'>
                dafkmsdlfkdslnf
            </Card>



        </>
    )
}
export default Blog