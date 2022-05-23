import React from 'react';
import {
    Grid,
    Box,
    CardMedia,
    Typography,
    Container
} from '@mui/material';
import Slider from "react-slick";
import changes1 from '../../images/Changes1.jpg'
import changes2 from '../../images/Changes2.jpg'
import changes3 from '../../images/Changes3.jpg'
import changes4 from '../../images/Changes4.jpg'
import changes5 from '../../images/Changes5.jpg'

const Changes = (props) => {
    const changessetting = {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 650,
                settings: { slidesToShow: 1, slidesToScroll: 1, }
            },
            {
                breakpoint: 920,
                settings: { slidesToShow: 2, slidesToScroll: 2, }
            }
        ]
    };
    const changes = React.createRef()
    return (
            <Grid container sx={{ bgcolor: '#d5d5d5' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className="HomePacketChangesSection">
                    <Typography sx={{ fontFamily: 'Mulish', fontSize: '48px', color: '#FFD700', fontWeight: '700' }}>
                        <i>DEĞİŞİMLER</i>
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12} sx={{
                        paddingBottom:'24px'
                }}>
                    <Slider className="HeroSlider" ref={changes}  {...changessetting} >
                    
                        <div className='homePageSliderCard'>
                                <CardMedia
                                    className='HomePageCardImage'
                                    component="img"
                                    height="290"
                                    src={changes1}
                                />
                        </div>
                        <div className='homePageSliderCard'>
                                <CardMedia
                                    className='HomePageCardImage'
                                    component="img"
                                    height="290"
                                    src={changes2}

                                />
                        </div>
                        <div className='homePageSliderCard'>
                                <CardMedia
                                    className='HomePageCardImage'
                                    component="img"
                                    height="290"
                                    src={changes3}

                                />
                        </div>
                        <div className='homePageSliderCard'>
                                <CardMedia
                                    className='HomePageCardImage'
                                    component="img"
                                    height="290"
                                    src={changes4}
                                />
                        </div>
                                <CardMedia
                                    className='HomePageCardImage'
                                    component="img"
                                    height="290"
                                    src={changes5}
                                />
                    </Slider>
                </Grid>
            </Grid>
    )
}
export default Changes;