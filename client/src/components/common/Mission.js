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
            Alışa gelmişin dışında olmakla beraber her şeyi sizin için özel olarak planlıyoruz.
            Aynı parmak izi gibi vücut yapısı da kişiyi özeldir. Yüksek tecrübeli ve eğitimlerini alanı ile alakalı tamamlamış kadromuz ile sizin koşullarına göre planlamalarımızı yapıyoruz.
            Kişisel uzaktan koçluk programın da ilk amacımız sizin şartlarınız dahilinde devamlılığı yüksek planlamalar yaparak, size sonuç aldırırken sporu ve diyet yapmayı sevmenizi sağlamak. Bunu başardığımız zaman sonuç kaçınılmaz.
            Kalıplaşmış planlamaların dışına çıkın.
            Amacımız sizi savaşa hazırlamak veya olympia yapmak değil, sizi hayaliniz de ki görüntüye katlanılabilir, uygulanabilir planlamalar ile ulaştırmak.
            İster evde, ister salonda çeşit sorunu olmadan katlanabilir diyetler,
            Tamamen sizin özel koşullalarınıza göre hazırlanmış anlaşılabilir, uygulanabilir planlamalar.
            Form gidişatına göre günlük, haftalık revizeler.
            Forma girmek için daha neyi bekliyorsunuz. Biz size değişmeyi vaat etmiyoruz, garanti veriyoruz.
          </Typography>
        </Grid>
      </Container>
    </Box>
  )
}

export default Mission