import React from 'react'
import { Typography, Grid, Box, Card, CardMedia, CardActions, CardContent, Button } from '@mui/material'


const blogcard = () => {
    return (
        <>
            <Grid>
                <Card className='blogCard'>
                    <CardMedia
                        className='Cardimage'
                        component="img"
                        height="240"
                        image={require('../images/cardimage1.png')}
                    />
                    <Box className='blogCardHeader' >
                        <Typography className='Cardtext'>
                            YOU MAY BE <br /> FORGETTING TO DRINK <br /> WATER!
                        </Typography>
                    </Box>
                    <CardContent>
                        <Typography className='Cardtextcontent' >
                            Su yaşamın vazgeçilmez bir parçası fakat bunun ciddiyetinin farkında mıyız? <br /> <br />  Nefes almaktan sonra en çok ihtiyaç duyduğumuz şey su içmektir...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Grid xs={6}>
                            <Typography sx={{ paddingLeft: '7px' }}>
                                14.02.2022
                            </Typography>
                        </Grid>
                        <Grid container
                            direction="row"
                            justifyContent="flex-end"
                            alignItems="center"
                        >
                            <Button className='Cardbutton'>
                                DEVAMINI OKU -
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default blogcard