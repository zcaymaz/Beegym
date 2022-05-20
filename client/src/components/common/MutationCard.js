import { Container, Grid, Typography } from '@mui/material'
import React from 'react';
import '../../styles/ChangesPage/Changes.css';

const Changes = () => {
    return (
        <Container className='bodyContainer'>
        <Grid container direction={'row'}>
        <Grid  lg={2} className='image'>
            <Typography>asdajsdsdassadbjasbfas</Typography>
        </Grid>
                <Grid lg={9} className='life'>
                <Typography>Merhabalar ben diyetisyen Şule Çetin. Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünü 2018 yılında şeref öğrencisi olarak tamamladım.
                    <br />
                    Hemen sonrasında özel bir klinikte beslenme danışanmanlığı ve bölgesel zayıflama alanında hizmet vermeye başladım.
                    Bu süreç boyunca yurtiçi ve yurtdışı yüz yüze görüşme imkanı sağlayamadığımız danışanlarıma online beslenme danışmanlığı vermeye devam ettim.</Typography>
                </Grid>
        </Grid>
        </Container>
    )
}

export default Changes