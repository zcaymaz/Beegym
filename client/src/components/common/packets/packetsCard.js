import { Box, Button, Card, CardMedia, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import "../../../styles/PacketsPage/packets.css"


const packetsCard = props => {
    return (
        <>
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
                        <Typography className='packetsCardInformation'>
                            {props.information}
                        </Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Box className='packetsCardPriceBox'>
                            <Typography className='packetsCardPrice'>
                                {props.price}
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Button className='packetsCardButton'>
                            <Typography className='packetsCardButtonText'>
                                Satın Al
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </>
    )
}

export default packetsCard