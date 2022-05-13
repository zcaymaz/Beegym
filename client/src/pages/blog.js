import React from 'react'
import { Box, CardMedia, Grid } from '@mui/material'
import BlogCard from '../components/common/Blogcard'
import BlogData from '../components/common/BlogData'

const blog = () => {
    return (
        <Box sx={{bgcolor:'#4B4B4B'}}>
            <CardMedia
                component="img"
                height="260"
                sx={{marginBottom: '20px'}}
                image={require('../images/blogPage.png')}
            />
            {/* Card */}
            <center>
                <Grid container
                    direction='row'                 
                    sx={{ justifyContent: { xs: 'center', md: 'normal' },bgcolor:'#4B4B4B' }}
                >
                    {BlogData.map((card) => {
                        return (
                            <BlogCard
                                header={card.header}
                                content={card.content}
                                media={card.media}
                                date={card.date}
                                button={card.button}
                                modalheader={card.modalheader}
                                modalcontentheader={card.modalcontentheader}
                                modalcontenttext={card.modalcontenttext}
                                modalcontentheader2={card.modalcontentheader2}
                                modalcontenttext2={card.modalcontenttext2}
                                modalcontentheader3={card.modalcontentheader3}
                                modalcontenttext3={card.modalcontenttext3}
                                modalcontentheader4={card.modalcontentheader4}
                                modalcontenttext4={card.modalcontenttext4}
                                modalcontentheader5={card.modalcontentheader5}
                                modalcontenttext5={card.modalcontenttext5}
                                modalcontentheader6={card.modalcontentheader6}
                                modalcontenttext6={card.modalcontenttext6}
                            />
                        )
                    })}
                </Grid>
            </center>
        </Box>
    )
}
export default blog