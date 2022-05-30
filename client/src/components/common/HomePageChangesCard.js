import React from 'react';
import {
    Grid,
    CardMedia,
    Typography,
    Box,
    Link
} from '@mui/material';
import Slider from "react-slick";
import changes0 from '../../images/Changes.jpeg'
import changes1 from '../../images/Changes1.jpg'
import changes2 from '../../images/Changes2.jpg'
import changes3 from '../../images/Changes3.jpg'
import changes4 from '../../images/Changes4.jpg'
import changes5 from '../../images/Changes5.jpg'
import changes6 from '../../images/Changes6.jpg'
import changes7 from '../../images/Changes10.jpeg'

const Changes = () => {
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
        <Grid container sx={{ bgcolor: '#000000' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12} className="homePageChangesHeadBackground">
                <Typography className='homePageChangesHead'>
                    <i>DEĞİŞİMLER</i>
                </Typography>
            </Grid>

            <Grid item xs={12} lg={12} sx={{
                paddingBottom: '24px'
            }}>
                <Box className="HomePageCardImage">
                    <Slider ref={changes}  {...changessetting} >
                    <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes0}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes1}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes2}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes3}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes4}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes5}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes6}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                        <Link href={'/changes'}>
                            <Grid className='changesSliderGrid'>
                                <CardMedia
                                    component="img"
                                    height="290"
                                    src={changes7}
                                    sx={{
                                        border: '6px outset #8C9978',
                                        borderRadius: '15px'
                                    }}
                                />
                            </Grid>
                        </Link>
                    </Slider>
                </Box>
            </Grid>
        </Grid>
    )
}
export default Changes;