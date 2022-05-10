import React from 'react'
import { Typography,Modal, Box, Divider, Grid } from '@mui/material'
import BlogCard from '../components/common/Blogcard'
import {cardimage1,
        cardimage2,
        cardimage3,
        cardimage4,
        cardimage5,
         } from '../images'
import modal from '../components/common/Modal'


const blogCardData = [
    {
        header: " YOU MAY BE FORGETTING  TO DRINK  WATER! ",
        content: "Su yaşamın vazgeçilmez bir parçası fakat bunun ciddiyetinin farkında mıyız?   Nefes almaktan sonra en çok ihtiyaç duyduğumuz şey su içmektir...",
        media: cardimage1,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "YOU MAY BE FORGETTING  TO DRINK  WATER!",
    },
    {
        header: " GÜZEL BİR UYKU UYUYAMIYOR MUSUNUZ ? ",
        content: "Sizinle “MELATONİN” ile ilgili bir kaç paylaşımda bulunmak istiyorum. Uyku problemi yaşam kalitemizi...",
        media: cardimage2,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "GÜZEL BİR UYKU UYUYAMIYOR MUSUNUZ?",

    },
    {
        header: " Şeker Tüketimi ",
        content: "Uzun zamandır şekerin yararları ve zararları tartışılırken; bu bloğumuzda yer verdik",
        media: cardimage3,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "ŞEKER TÜKETIMI",

    },
    {
        header: "Sebze Programı ",
        content: "Sağlıklı beslenme başlı başına ciddi bir iştir. Yağ yakmak ve kas yapmak söz konusu olduğunda daha da karmaşık hale gelir.",
        media: cardimage4,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "SEBZE PROGRAMI",

    },
    {
        header: "ESNEME TERİMİ NEDİR? ",
        content: "Biz bu yazıda, kasları germe tanımıyla bir takım kaynaklardan bir araya getirdiğimiz streching terimini ifade edeceğiz...",
        media: cardimage5,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "ESNEME TERİMİ NEDİR?",

    },
 
]


const blog = () => {
    return (
        <Box className='blogCardData'>
            <Divider
                sx={{
                    backgroundColor: 'yellow'
                }}
            />
            <Box className='blogheader'>
                {/* <center>
                    <Typography className='blogheadertext'>
                        Blog
                    </Typography>
                </center> */}
                <img
                    className='blogimage'
                    src={require('../images/blogPage.png')}
                />
            </Box>
            {/* Card */}
            <Grid container
                direction='row'
                className='blogCardData'
                sx={{ justifyContent: { xs: 'center', md: 'normal' } }}
            >
                {blogCardData.map((card) => {
                    return (
                        <BlogCard
                            header={card.header}
                            content={card.content}
                            media={card.media}
                            date={card.date}
                            button={card.button}
                            modalheader={card.modalheader}
                        />
                    )
                })}
            </Grid>
        </Box>
    )
}
export default blog