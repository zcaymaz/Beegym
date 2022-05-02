import React from 'react'
import { Typography, Grid, Box, Card, Divider, CardMedia } from '@mui/material'


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


            {/* Card */}
            <Box>
                <Box sx={{width:'350px'}}>   
                <Typography className='blogCardHeader'>
                        YOU MAY BE FORGETTING TO DRINK WATER!
                    </Typography>               
                    <CardMedia
                        className='Cardimage'
                        component="img"
                        height="240"
                        image={require('../images/cardimage1.png')}
                    />
                     
                
                <Card className='blogCard'>
                    <Box >
                   
                    </Box>
                </Card>
                </Box>
            </Box>

        </>
    )
}
export default Blog