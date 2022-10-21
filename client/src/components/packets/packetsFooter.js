import React from 'react'
import { Box, Typography } from '@mui/material'

const packetsFooter = () => {
    return (
        <>
            <br />
            <Box className='packetsFooter'>
                <Typography className='packetsFooterText'>
                    Tüm Online Eğitim Paketlerimiz Kişiye Özel Hazırlanmaktadır.
                </Typography>
            </Box>
            <Box className='packetsFooter'>
                <Typography className='packetsFooterText2'>
                    Havale EFT ile ödeme yapmak isterseniz aşağıda bulunan IBAN numarasından ödeme yapabilirsiniz.
                </Typography>
                <Typography className='packetsFooterText3'>
                    Ad Soyad: Enes Uludoğan
                </Typography>
                <Typography className='packetsFooterText3'>
                    Çalıştığımız Banka : Ziraat Bankası
                </Typography>
                <Typography className='packetsFooterText3'>
                    IBAN : TR76 0009 9012 3456 7800 1000 01
                </Typography>
            </Box>
            <br />
        </>
    )
}

export default packetsFooter