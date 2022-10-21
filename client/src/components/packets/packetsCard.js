import { Box, Button, Card, CardMedia, Grid, Typography, } from '@mui/material'
import React from 'react'
import "../../styles/PacketsPage/packets.css"


const packetsCard = props => {
    return (
        <>
        <Box className='packetsCardOut'>
            <Card className='packetsCard'>
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12}>
                        <Typography className='packetsCardHeader'>{props.header}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <center>
                            <CardMedia
                                component="img"
                                className='packetsCardImg'
                                src={props.image}
                            />
                        </center>
                    </Grid>
                    <Grid>
                        <Typography className='packetsCardName'>
                            {props.name}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='packetsCardHeader'>{props.duration}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className='packetsCardContent'>
                            {props.t1}
                        </Typography>
                        <Typography className='packetsCardContent'>
                            {props.t2}
                        </Typography>
                        <Typography className='packetsCardContent'>
                            {props.t3}
                        </Typography>
                        <Typography className='packetsCardContent'>
                            {props.t4}
                        </Typography>
                        <Typography className='packetsCardContent'>
                            {props.t5}
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      
                    </Grid>
                    <Grid item xs={10}>
                    <Box>
                        <Typography sx={{ fontSize: { xs: '14px' , md: '16px'}}} className='packetsCardInformation'>
                            {props.information}
                        </Typography>
                    </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className='packetsCardButton'>
                            <Typography className='packetsCardButtonText'>
                                {props.price}
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Card>
            </Box>
        </>
    )
}

export default packetsCard