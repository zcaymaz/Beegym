import React from "react";
import { Container } from "@mui/material";
import {
    Sliderimage1,
    cardimage2,
    cardimage3,
    cardimage4,
} from '../images'
import Slider from "react-slick";
import HeroSlider from "../components/common/HeroSlider";

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
        </>
    );
}

export default home