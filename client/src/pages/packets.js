import React from 'react'
import { Container, Grid, Box, Typography } from '@mui/material'
import "../styles/PacketsPage/packets.css"
import PacketsCard from "../components/common/packets/packetsCard"
import {
    antrenman,
    beslenme,
    SuleCetin,
} from '../images'

const Packets = () => {
    return (
        <>
            <Box sx={{ height: { xs: '100px', md: '150px' } }} className='packetsNav'>
                <Typography className='packetsNavText' sx={{ lineHeight: { xs: '100px', md: '150px' }, fontSize: { xs: '40px', md: '50px' } }}>
                    PAKETLERRRRR
                </Typography>
            </Box>
            <Container maxWidth="110%" className='packets-container'>
                <Container maxWidth="xl" >
                    <br />
                    <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Paket 1"
                                    image={beslenme}
                                    duration="4 Haftalık"
                                    t1="Antreman Planlaması"
                                    information="Hedefleriniz, spor geçmişiniz, rahatsızlıklarınız, ekipmanlı veya ekipmansız, gibi etmenlere göre planlanacaktır. Ay sonunda analiz ve geri dönütler alınacaktır."
                                    price="57 ₺"
                                />
                            </center>
                        </Grid>
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Paket 2"
                                    image={antrenman}
                                    duration="4 Haftalık"
                                    t1="Antreman Planlaması"
                                    t2="Beslenme Planlaması"
                                    t3="Postür Analizi"
                                    t4="7/24 Whatsapp Danışmanlık"
                                    t5="Supplement Planlaması"
                                    information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                                    price="145 ₺"
                                />
                            </center>
                        </Grid>
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Paket 3"
                                    image={antrenman}
                                    duration="12 Haftalık"
                                    t1="Antreman Planlaması"
                                    t2="Beslenme Planlaması"
                                    t3="Postür Analizi"
                                    t4="7/24 Whatsapp Danışmanlık"
                                    t5="Supplement Planlaması"
                                    information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                                    price="355 ₺"
                                />
                            </center>
                        </Grid>
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Paket 4"
                                    image={antrenman}
                                    duration="24 Haftalık"
                                    t1="Antreman Planlaması"
                                    t2="Beslenme Planlaması"
                                    t3="Postür Analizi"
                                    t4="7/24 Whatsapp Danışmanlık"
                                    t5="Supplement Planlaması"
                                    information="Hedefleriniz, kan grubunuz, günlük rutinleriniz, alerjenleriniz, spor geçmişiniz, rahatsızlıklarınız, sürdürülebilirlik gibi etmenler göz önünde bulundurulup 4 haftalık planlama yapılacaktır."
                                    price="521 ₺"
                                />
                            </center>
                        </Grid>
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Paket 5"
                                    image={SuleCetin}
                                    name="Dyt.Şule ÇETİN"
                                    duration="4 Haftalık"
                                    t1="Haftalık Diyet Planlaması"
                                    t2="Haftalık Analiz"
                                    t3="Diyet Takibi"
                                    price="421 ₺"
                                />
                            </center>
                        </Grid>
                    </Grid>
                    <br />
                </Container>
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
            </Container>
        </>
    )
}

export default Packets