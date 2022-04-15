import React from "react";
import "../styles/ConctactPage/conctact.css";
import {
    Container,
    Typography,
    Grid,
    Box,
    Divider
} from "@mui/material";

const Conctact = () => {
    return (
        <>
            <Container className="headContainer">
                <Typography className="headContainerText">
                    Bize ulaşmak çok basit!
                </Typography>
            </Container>
            <Container maxWidth="xl">
                <h2>
                    Bize ulaşmak neden önemli?
                </h2>
                <Typography className="text">
                    Sizde artık birşeyleri değiştirmek istemiyor musunuz? Çoğu insan Fitness salonlarını tercih ediyor. Ama fitness salonuna gitmeden forma girmek de mümkün. Size özel diyet programı ve evde ister aletli ister aletsiz hocalarımız tarafından hazırlanan bir program karşılıyor. Sürekli hocalarımız ile irtibatda kalarak anlık takib de mümkün. Kısacası en iyi PT(Personal Training) ile artık her şey daha kolay.
                </Typography>
                <h2>
                    Bize nasıl ulaşabilirsiniz ?
                </h2>
                <Typography className="text">
                    Sayfada yer alan whatsapp ikonuna tıklayarak canlı iletişime geçebilirsiniz. Aşağıdaki adreslerimizden bizlere ulaşabilirsiniz. İnstagram adresimizden 'enesuludoganfitness' canlı takipde kalabilir, bizleri takip edebilirsiniz.
                </Typography>
            </Container>
            {/* Bilgiler */}
            <Box padding={'20px'} height="262.5px">
                <Grid item xs={12} md={12} className="conctactHead">
                    İletişim Bilgilerimiz
                </Grid>
                <Grid container direction={'row'} textAlign={"center"} paddingTop="10px" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid xs={2.3} md={6} className="conctactText">
                        <Grid item paddingTop={'10px'}>Telefon</Grid>
                        <Grid item paddingTop={'10px'}>İnstagram</Grid>
                        <Grid xs={1} sm={11} md={12} item paddingTop={'10px'}>Mail</Grid>
                    </Grid>
                    <Grid container direction={'column'} xs={9.7} md={6} className="conctactText">
                        <Grid item paddingTop={'10px'}>+90 553 917 0698</Grid>
                        <Grid item paddingTop={'10px'}>enesuludoganfitness</Grid>
                        <Grid item xs={1} paddingTop={'10px'}>enesuludoganfitness@gmail.com</Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default Conctact 