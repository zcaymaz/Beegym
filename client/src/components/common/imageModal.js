import React from 'react'
import { Typography, Grid, Box, Card, CardMedia, IconButton, Divider, CardActions, Modal, CardContent, Button } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import beslenme from '../../images/beslenme.jpg'

const style = {
    maxWidth: '720px',
    minHeight: '640px',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    border: '1px solid #000',
    p: 2,
};
const styles = {
    paddingTop: '8%',
    overflowX: 'hidden',
    paddingBottom: '8%',
};

const ImageModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Button className='Cardbutton' onClick={handleOpen}>
                Selam
            </Button>
            <Modal open={open} onClose={handleClose} sx={styles} className='blogmodal'>
                <center>
                    <Box sx={style}>
                        <IconButton onClick={() => handleClose()} sx={{ float: 'right' }}>
                            <CloseIcon sx={{ color: '#FFD358' }} fontSize="medium" />
                        </IconButton>
                        <CardMedia
                            component={'img'}
                            height="640"
                            src={beslenme}
                            sx={{ borderRadius: '5px' }}
                        />
                    </Box>
                </center>
            </Modal>
        </>
    )
}

export default ImageModal