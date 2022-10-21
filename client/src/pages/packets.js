import React from 'react'
import { Container, Grid } from '@mui/material'
import "../styles/PacketsPage/packets.css"
import PacketsCard from "../components/packets/packetsCard"
import PacketsFooter from "../components/packets/packetsFooter"
import PageHeader from '../components/common/PageHeader'
import PacketCardData from '../datas/datas'

const Packets = () => {
    return (
        <>
        <PageHeader text="PAKETLER"/>
            <Container maxWidth="110%" className='packets-container'>
                <Grid container direction="row"
                    justifyContent="center" alignItems="center">
                    {PacketCardData.map((card) => {
                        return (
                            <Grid marginTop={3}>
                                <center>
                                    <PacketsCard
                                        header={card.header}
                                        image={card.image}
                                        name={card.name}
                                        duration={card.duration}
                                        t1={card.t1}
                                        t2={card.t2}
                                        t3={card.t3}
                                        t4={card.t4}
                                        t5={card.t5}
                                        information={card.information}
                                        price={card.price}
                                    />
                                </center>
                            </Grid>
                        )
                    })}
                </Grid>
                <PacketsFooter/>
            </Container>
        </>
    )
}

export default Packets