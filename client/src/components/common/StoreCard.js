import React from 'react'
import { Grid, Typography, Button, CardActionArea, Card, CardContent, CardMedia } from '@mui/material';


const StoreCard = (props) => {
    return (
        <>
            <Card className="store-card" key={props.id}>
                <CardActionArea href="cardata">
                    <CardMedia
                        component="img"
                        className="store-card-media1"
                        alt=""
                    />
                    <CardContent>
                        <Grid container sx={{ margin: 'auto', }}>
                            <Grid item xs={12} className="store-card-name-area-grid">
                                <Typography className="store-card-name" >
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="body1" className="store-card-description" color="text.secondary">
                                    {props.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={5}>
                                <Button color="success" href='purchase'>
                                    <Typography className="store-card-price">
                                        {props.price}₺
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>

        </>
    )
}

export default StoreCard;