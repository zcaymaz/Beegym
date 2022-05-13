import React, { useState } from 'react'
import { Typography, Grid, Box, Card, CardMedia, IconButton, Divider, CardActions, Modal, CardContent, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const style = {
    maxWidth: '640px',
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
};



const Blogcard = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

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
                // {require('../images/cardimage1.png')}
                />
                <Box className='blogCardHeader' >
                    <Typography className='Cardtext'>
                        {props.header}
                        {/* YOU MAY BE <br /> FORGETTING TO DRINK <br /> WATER! */}
                    </Typography>
                </Box>
                <CardContent sx={{ height: '180px' }}>
                    <Typography className='Cardtextcontent' >
                        {props.content}
                        {/* Su yaşamın vazgeçilmez bir parçası fakat bunun ciddiyetinin farkında mıyız? <br /> <br />  Nefes almaktan sonra en çok ihtiyaç duyduğumuz şey su içmektir... */}
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
                                {/* 14.02.2022 */}
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
                        >
                            <center>
                                <Box sx={{ ...style, }}>
                                    <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                                        <CloseIcon sx={{ color: '#FAA629' }} fontSize="medium" />
                                    </IconButton>
                                    <Typography variant='h5' className='viewSubmissionchidmodaltitle'>
                                        {props.modalheader}
                                    </Typography>
                                    <Divider sx={{ border: '1px solid #C0C0C0', marginTop: '10px' }} />
                                    <Typography variant='h6'>
                                        {props.modalcontentheader}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext}
                                    </Typography>
                                    <Divider sx={{ border: '1px solid #C0C0C0', }} />
                                    <Typography variant='h6'>
                                        {props.modalcontentheader2}
                                    </Typography>
                                    <Typography>
                                        {props.modalcontenttext2}
                                    </Typography>
                                </Box>
                            </center>
                        </Modal>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default Blogcard