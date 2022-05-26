import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box
} from '@mui/material';

const Mission = () => {
  return (
    <Box className='missionOut'>
      <Container className='missionBuild'>
        <Grid className='missionGrid'>
          <Typography className='missionText'>
            Alışa gelmişlerin dışında olmakla beraber herşeyi sizin için hazırlıyoruz. Bütün amacımız sizin istekleriniz doğrultusunda ilerlemek.
            Aynı parmak izi gibi vücut yapısı kişiye özeldir. Yüksek tecrübe ve kaliteli hocalarımız sayesinde sadece size özel olmak koşuluyla
            programlarımızı hazırlıyoruz. Bu yolda ilk amacımız, sizi bu programa mental olarak hazırlamak. Siz hazır olduğunuzda ve diyete
            başladığınızda geriye kalan herşey bizde. İletişimi kesmiyerek anlık takibde kalıyoruz. Anlık takip ve haftalık analizler sayesinde
            PT programında hata olmadan ilerlemek çok önemli. Programlarımızda size sunduğumuz spor hareketlerinde ister spor salonu
            ister evde yapmak mümkün. Spor harektlerindeki ağırlımızın söz konusu; diyet listesi ile beraber ilerlemesidir. Kısacası
            fit olmak için sadece diyet listesi yetmiyor diyebiliriz. İşte bu yüzden buradayız...
          </Typography>
        </Grid>
      </Container>
    </Box>
  )
}

export default Mission