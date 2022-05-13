import React from 'react'
import { Typography, Grid, Box, Fade, Card, CardMedia,IconButton, Divider, CardActions, Modal, CardContent, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const style = {
    maxWidth: '660px',
    minHeight: '523px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
                    height="260"
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
                    <Grid container
                        direction="row"
                    >
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
                            <center>
                            <Fade in={open}>
                                <Box sx={{ ...style, }}>
                                    <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                                        <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
                                    </IconButton>
                                    <Typography variant='h5'>
                                        {props.modalheader}
                                    </Typography>
                                    <Divider sx={{ border: '1px solid #C0C0C0', marginTop: '10px' }} />
                                    <Typography variant='h6' >
                                        {props.modalcontentheader}
                                    </Typography>
                                    <Typography >
                                        {props.modalcontenttext}
                                    </Typography>
                                    <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    <Typography variant='h6'>
                                        {props.modalcontentheader2}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext2}
                                    </Typography>
                                    <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    <Typography variant='h6'>
                                        {props.modalcontentheader3}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext3}
                                        <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    </Typography>
                                    <Typography variant='h6'>
                                        {props.modalcontentheader4}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext4}
                                        <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    </Typography>
                                    <Typography variant='h6'>
                                        {props.modalcontentheader5}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext5}
                                        <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    </Typography>
                                    <Typography variant='h6'>
                                        {props.modalcontentheader6}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext6}
                                    </Typography>
                                </Box>
                                </Fade>
                            </center>
                        </Modal>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Blogcard