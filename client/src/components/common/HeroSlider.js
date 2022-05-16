import { CardMedia, Container } from '@mui/material'
import React from 'react'

const HeroSlider = (props) => {
    return (
        <>
            <Container maxWidth="100%">
                <CardMedia
                    sx={{ height: '41.3rem', paddingTop:'0.1%', width:'100%' }}
                    component='img'
                    src={props.image}
                />
            </Container>
        </>
    )
}

export default HeroSlider