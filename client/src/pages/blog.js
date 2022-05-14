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
                                divider1={card.divider1}
                                modalcontentheader={card.modalcontentheader}
                                modalcontenttext={card.modalcontenttext}
                                divider2={card.divider2}
                                modalcontentheader2={card.modalcontentheader2}
                                modalcontenttext2={card.modalcontenttext2}
                                divider3={card.divider3}
                                modalcontentheader3={card.modalcontentheader3}
                                modalcontenttext3={card.modalcontenttext3}
                                divider4={card.divider4}
                                modalcontentheader4={card.modalcontentheader4}
                                modalcontenttext4={card.modalcontenttext4}
                                divider5={card.divider5}
                                modalcontentheader5={card.modalcontentheader5}
                                modalcontenttext5={card.modalcontenttext5}
                                divider6={card.divider6}
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