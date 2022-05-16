import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import {
    Sliderimage1,
    cardimage2,
    cardimage3,
    cardimage4,
    antrenman,
    beslenme,
    SuleCetin,
} from '../images'
import Slider from "react-slick";
import HeroSlider from "../components/common/HeroSlider";
import PacketsCard from "../components/common/packets/packetsCard"

const HeroSliderImages = [
    {
        image: Sliderimage1,
    },
    {
        image: cardimage2,
    },
    {
        image: cardimage3,
    },
    {
        image: cardimage4,
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
    return (
        <>
            <Container maxWidth="100%" sx={{ height: '42rem', bgcolor: '#d5d5d5', }}>
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
            <Grid container sx={{ paddingTop: '1.3rem', paddingBottom: '2%', bgcolor: '#d5d5d5' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className="HomePacketSection">
                    <Typography sx={{ fontFamily: 'Mulish', fontSize: '48px', color: '#FFD700', fontWeight: '700' }}>
                        <i>PAKETLER</i>
                    </Typography>
                </Grid>
                <Grid item md={6} xl={3.8}>
                    <center>
                        <PacketsCard
                            header="Paket 1"
                            image={beslenme}
                            duration="4 Haftalık"
                            t1="Antreman Planlaması"
                            information="Hedefleriniz, spor geçmişiniz, rahatsızlıklarınız, ekipmanlı veya ekipmansız, gibi etmenlere göre planlanacaktır. Ay sonunda analiz ve geri dönütler alınacaktır."
                            price="57 ₺"
                        />
                    </center>
                </Grid>
                <Grid item md={6} xl={3.8}>
                    <center>
                        <PacketsCard
                            header="Paket 2"
                            image={antrenman}
                            duration="4 Haftalık"
                            t1="Antreman Planlaması"
                            t2="Beslenme Planlaması"
                            t3="Postür Analizi"
                            t4="7/24 Whatsapp Danışmanlık"
                            t5="Supplement Planlaması"
                            information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                            price="145 ₺"
                        />
                    </center>
                </Grid>
                <Grid item md={6} xl={3.8}>
                    <center>
                        <PacketsCard
                            header="Paket 3"
                            image={antrenman}
                            duration="12 Haftalık"
                            t1="Antreman Planlaması"
                            t2="Beslenme Planlaması"
                            t3="Postür Analizi"
                            t4="7/24 Whatsapp Danışmanlık"
                            t5="Supplement Planlaması"
                            information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                            price="355 ₺"
                        />
                    </center>
                </Grid>
                <Grid item md={6} xl={3.8}>
                    <center>
                        <PacketsCard
                            header="Paket 4"
                            image={antrenman}
                            duration="24 Haftalık"
                            t1="Antreman Planlaması"
                            t2="Beslenme Planlaması"
                            t3="Postür Analizi"
                            t4="7/24 Whatsapp Danışmanlık"
                            t5="Supplement Planlaması"
                            information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                            price="521 ₺"
                        />
                    </center>
                </Grid>
                <Grid item md={6} xl={3.8}>
                    <center>
                        <PacketsCard
                            header="Paket 5"
                            image={SuleCetin}
                            name="Dyt.Şule ÇETİN"
                            duration="4 Haftalık"
                            t1="Haftalık Diyet Planlaması"
                            t2="Haftalık Analiz"
                            t3="Diyet Takibi"
                            price="421 ₺"
                        />
                    </center>
                </Grid>
            </Grid>
            <Grid container sx={{ paddingTop: '1.3rem', bgcolor: '#d5d5d5' }} spacing={3} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12} className="HomePacketSection">
                    <Typography sx={{ fontFamily: 'Mulish', fontSize: '48px', color: '#FFD700', fontWeight: '700' }}>
                        <i>DEĞİŞİMLER</i>
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
}

export default home