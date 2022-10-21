import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Sliderimage1, antrenman, } from '../images'
import Slider from "react-slick";
import HeroSlider from "../components/common/HeroSlider";
import PacketsCard from "../components/packets/packetsCard";
import HomePageChangesCard from "../components/common/HomePageChangesCard";
import MissionPage from "../components/common/Mission";
import PageHeader from '../components/common/PageHeader'
import PacketCardData from '../datas/datas'

const HeroSliderImages = [
    {
        image: Sliderimage1,
    },
    {
        image: antrenman,
    },

]

const home = () => {
    const heroSlider = React.createRef()
    const heroslidersetting = {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 550,
                settings: { slidesToShow: 1, slidesToScroll: 1, }
            }
        ]
    };
    const packetCard = React.createRef()
    const packetCardSetting = {
        dots: false,
        arrows: false,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 2000,
                settings: { slidesToShow: 4, slidesToScroll: 2, },
            },
            {
                breakpoint: 1440,
                settings: { slidesToShow: 3, slidesToScroll: 1, },
            },
            {
                breakpoint: 1070,
                settings: { slidesToShow: 2, slidesToScroll: 1, },
            },
            {
                breakpoint: 700,
                settings: { slidesToShow: 1, slidesToScroll: 1, },
            },
        ]
    };
    return (
        <>
            <Container maxWidth="100%" sx={{ height: '42.9rem', bgcolor: '#000000', }}>
                <Slider className="HeroSlider" ref={heroSlider} {...heroslidersetting}>
                    {HeroSliderImages.map((card) => {
                        return (
                            <>
                                <HeroSlider
                                    image={card.image}
                                />
                            </>
                        )
                    })}
                </Slider>
            </Container>
            <Grid container sx={{ bgcolor: '#000' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} lg={12} padding='0px'>
                    <HomePageChangesCard />
                </Grid>
            </Grid>
            <PageHeader text="PAKETLER" />
            <Container maxWidth="110%" className='packets-container'>
                <Grid container direction="row"
                    justifyContent="center" alignItems="center">
                    <Grid marginBottom={3} marginTop={3} xs={11}>
                        <Slider className="HeroSlider" ref={packetCard} {...packetCardSetting}>
                            {PacketCardData.map((card) => {
                                return (
                                    <center>
                                        <PacketsCard
                                            header={card.header}
                                            image={card.image}
                                            name={card.name}
                                            duration={card.duration}
                                            t1={card.t1}
                                            t2={card.t2}
                                            t3={card.t3}
                                            t4={card.t4}
                                            t5={card.t5}
                                            information={card.information}
                                            price={card.price}
                                        />
                                    </center>
                                )
                            })}
                        </Slider>
                    </Grid>
                </Grid>
            </Container>
            {/* <Grid xs={12}>
                <Slider className="HeroSlider" ref={changesCard} {...changesCardSetting}>
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
            </Grid> */}
            <Grid container sx={{ bgcolor: '#000' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className="homePageMissionHeadBackground">
                    <Typography className="homePageMissionHead">
                        <i>MİSYONUMUZ</i>
                    </Typography>
                </Grid>
                <Grid item xs={12} lg={12} padding='0px'>
                    <MissionPage />
                </Grid>
            </Grid>
        </>
    );
}

export default home