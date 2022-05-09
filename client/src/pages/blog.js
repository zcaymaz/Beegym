import React from 'react'
import { Typography, Box, Divider,} from '@mui/material'
// import Blogcard from '../components/common/Blogcard'


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
           
               {/* <div>
                   <Box>
                       ref={startu}
                   </Box>
               </div>
           */}
        </>
    )
}
export default Blog