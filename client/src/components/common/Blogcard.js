import React from 'react'
import { Typography, Grid, Box, Card, CardMedia, IconButton, Divider, CardActions, Modal, CardContent, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const style = {
    maxWidth: '660px',
    minHeight: '583px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
};
const styles = {
    paddingTop: '8%',
    overflowX: 'hidden',
    paddingBottom: '8%'
};

const Blogcard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Grid xs={12} sm={6} md={4} lg={3}
            className='blogCardData'
        >
            <Card className='blogCard'>
                <CardMedia
                    className='Cardimage'
                    component="img"
                    height="240"
                    image={props.media}
                />
                <Box className='blogCardHeader' >
                    <Typography className='Cardtext'>
                        {props.header}
                    </Typography>
                </Box>
                <CardContent sx={{ height: '180px' }}>
                    <Typography className='Cardtextcontent' >
                        {props.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Grid container direction="row">
                        <Grid xs={12} md={4}
                            sx={{ textAlign: { xs: 'center', xl: 'normal' } }}
                        >
                            <Typography sx={{ paddingTop: '7px', }}>
                                {props.date}
                            </Typography>
                        </Grid>
                        <Grid xs={12} md={8}
                            sx={{ textAlign: { xs: 'center', xl: 'normal' } }}
                        >
                            <Button className='Cardbutton'
                                onClick={handleOpen}
                            >{props.button}
                                <ArrowForwardIcon />
                            </Button>
                        </Grid>
                        {/* Modal */}
                        <Modal
                            open={open}
                            onClose={handleClose}
                            sx={styles}
                            className='blogmodal'
                        >


                            <Grid >

                                <center>
                                    <Box sx={{ ...style, }} >
                                        <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                                            <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
                                        </IconButton>
                                        <Typography variant='h5' sx={{ marginTop: '30px' }}>
                                            {props.modalheader}
                                        </Typography>
                                        {props.divider1 ?
                                            <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                            : null
                                        }
                                        <Typography variant='h6' >
                                            {props.modalcontentheader}
                                        </Typography>
                                        <Typography >
                                            {props.modalcontenttext}
                                        </Typography>
                                        {props.divider2 ?
                                            <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                            : null
                                        }
                                        <Typography variant='h6'>
                                            {props.modalcontentheader2}
                                        </Typography>
                                        <Typography>
                                            {props.modalcontenttext2}
                                        </Typography>
                                        {props.divider3 ?
                                            <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                            : null
                                        }
                                        <Typography variant='h6'>
                                            {props.modalcontentheader3}
                                        </Typography>
                                        <Typography>
                                            {props.modalcontenttext3}
                                            {props.divider4 ?
                                                <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                                : null
                                            }
                                        </Typography>
                                        <Typography variant='h6'>
                                            {props.modalcontentheader4}
                                        </Typography>
                                        <Typography>
                                            {props.modalcontenttext4}
                                            {props.divider5 ?
                                                <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                                : null
                                            }
                                        </Typography>
                                        <Typography variant='h6'>
                                            {props.modalcontentheader5}
                                        </Typography>
                                        <Typography>
                                            {props.modalcontenttext5}
                                            {props.divider6 ?
                                                <Divider sx={{ border: '1px solid #FFD358', marginTop: '10px' }} />
                                                : null
                                            }
                                        </Typography>
                                        <Typography variant='h6'>
                                            {props.modalcontentheader6}
                                        </Typography>
                                        <Typography>
                                            {props.modalcontenttext6}
                                        </Typography>

                                    </Box>
                                </center>
                            </Grid>


                        </Modal>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Blogcard