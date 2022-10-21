import React from 'react';
import {
    Grid,
    CardMedia,
    Typography,
    Box,
} from '@mui/material';
import Slider from "react-slick";
import { changes, changes0, changes1, changes2, changes3, changes4, changes5, changes6, changes7, changes8, changes9, changes10 } from '../../images';

const Changes = () => {

    const ChangesCardData = [
        {
            image: changes,
        },
        {
            image: changes0,
        },
        {
            image: changes1,
        },
        {
            image: changes2,
        },
        {
            image: changes3,
        },
        {
            image: changes4,
        },
        {
            image: changes5,
        },
        {
            image: changes6,
        },
        {
            image: changes7,
        },
        {
            image: changes8,
        },
        {
            image: changes9,
        },
        {
            image: changes10,
        },
    ]

    const changesCardSetting = {
        dots: false,
        arrows: false,
        slidesToShow: 4,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: { slidesToShow: 3, slidesToScroll: 2, },
            },
            {
                breakpoint: 1440,
                settings: { slidesToShow: 3, slidesToScroll: 1, },
            },
            {
                breakpoint: 1360,
                settings: { slidesToShow: 2, slidesToScroll: 1, },
            },
            {
                breakpoint: 800,
                settings: { slidesToShow: 1, slidesToScroll: 1, },
            },
        ]
    };
    const ChangesRef = React.createRef()
    return (
        <Grid container sx={{ bgcolor: '#000000' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} className="homePageChangesHeadBackground">
                <Typography className='homePageChangesHead'>
                    <i>DEĞİŞİMLER</i>
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{ paddingBottom: '24px' }}>
                <Box className="HomePageCardImage">
                    <Slider ref={ChangesRef}  {...changesCardSetting} >
                        {ChangesCardData.map((card) => {
                            return (
                                <center>
                                    <Grid className='changesSliderGrid'>
                                        <CardMedia
                                            component="img"
                                            height="390"
                                            src={card.image}
                                            sx={{
                                                border: '6px solid #8C9978',
                                                borderRadius: '15px'
                                            }}
                                        />
                                    </Grid>
                                </center>
                            )
                        })}
                    </Slider>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Changes;