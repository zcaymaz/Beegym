import React from "react";
import {
    Container,
    Typography,
    Grid,
} from "@mui/material";
import "../styles/ConctactPage/conctact.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import MonochromePhotosOutlinedIcon from '@mui/icons-material/MonochromePhotosOutlined';
import ConnectWithoutContactOutlinedIcon from '@mui/icons-material/ConnectWithoutContactOutlined';
import NotListedLocationOutlinedIcon from '@mui/icons-material/NotListedLocationOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';

const Conctact = () => {
    return (
        <>
            <Container className="headContainer">
                <Typography className="headContainerText">
                    Bize ulaşmak çok basit!
                </Typography>
            </Container>
            <Container maxWidth="xl">
                <h3>Bize ulaşmak neden önemli?</h3>
                <Typography>
                    Sizde artık birşeyleri değiştirmek istemiyor musunuz? Çoğu insan Fitness salonlarını tercih ediyor. Ama fitness salonuna gitmeden forma girmek de mümkün. Size özel diyet programı ve evde ister aletli ister aletsiz hocalarımız tarafından hazırlanan bir program karşılıyor. Sürekli hocalarımız ile irtibatda kalarak anlık takib de mümkün. Kısacası en iyi PT(Personal Training) ile artık her şey daha kolay.
                </Typography>
                <h3>
                    Bize nasıl ulaşabilirsiniz ?
                </h3>
                <Typography>
                    Sayfada yer alan whatsapp ikonuna tıklayarak canlı iletişime geçebilirsiniz. İnstagram adresimizden 'enesuludoganfitness' canlı takipde kalabilir, bizleri takip edebilirsiniz.                </Typography>
            </Container>
            {/* Bilgiler */}
            <Grid container>
                <Grid item md={6} textAlign='center'>
                    <Typography>Sosyal Medya Adreslerimiz</Typography>
                    <Grid container direction={'row'}>

                        <Grid container md={6}>
                            <Grid md={6}>
                                İnstagram
                            </Grid>
                        </Grid>
                        <Grid md={6}>
                            <Grid md={6}>
                                enesuludoganfitness
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} textAlign='center'>
                    <Typography>Sosyal Medya Adreslerimiz</Typography>
                    <Grid container direction={'row'}>

                        <Grid md={6}>
                            <Grid>
                                deneme1
                            </Grid>
                            <Grid>
                                deneme2
                            </Grid>
                            <Grid>
                                deneme3
                            </Grid>
                        </Grid>
                        <Grid md={6}>
                            <Grid>
                                denek1
                            </Grid>
                            <Grid>
                                denek2
                            </Grid>
                            <Grid>
                                denek3
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Conctact 