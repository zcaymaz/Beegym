import React from 'react'
import { Container, Grid } from '@mui/material'
import "../styles/PacketsPage/packets.css"
import PacketsCard from "../components/common/packets/packetsCard"
import antreman from "../images/antreman.jpg"
import beslenme from "../images/beslenme.jpg"
import SuleCetin from "../images/SuleCetin.png"

const Packets = () => {
    return (
        <>
            <Container maxWidth="100%" className='packets-container'>
                <Container maxWidth="xl" >
                    <br />
                    <Grid container spacing={3} direction="row" justifyContent="center" alignItems="center">
                        <Grid item md={6} xl={3.8}>
                            <center>
                                <PacketsCard
                                    header="Antreman Planlaması"
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
                                    header="Antreman Programı"
                                    image={antreman}
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
                                    header="Antreman Programı"
                                    image={antreman}
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
                                    header="Antreman Programı"
                                    image={antreman}
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
                                    header="Diyetisyen Paketi"
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
            </Container>
        </>
    )
}

export default Packets