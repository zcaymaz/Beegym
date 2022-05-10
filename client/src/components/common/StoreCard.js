import React from 'react'
import { Grid, Typography, Button, CardActionArea, CardActions, Card, CardContent, CardMedia } from '@mui/material';


const StoreCard = (props) => {
    return (
        <>
            <Card className="store-card">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className="store-card-media1"
                        alt=""
                    />
                    <CardContent>
                        <Grid container sx={{ margin: 'auto', }}>
                            <Grid item xs={12}>
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
                                <Button color="success">
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