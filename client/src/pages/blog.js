import React from 'react'
import { Typography,Modal, Box, Divider, Grid } from '@mui/material'
import BlogCard from '../components/common/Blogcard'
import {cardimage1,
        cardimage2,
        cardimage3,
        cardimage4,
        cardimage5,
         } from '../images'



const blogCardData = [
    {
        header: " Kilo ve Yağ Kaybı",
        content: "Yağ kaybı, yağdan kilo kaybı anlamına gelir. Kilo vermekten daha spesifik ve sağlıklı bir hedeftir.",
        media: cardimage1,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "Kilo Vermek ve Yağ Yakmak Arasındaki Fark Nedir? Kilo ve Yağ Kaybı",
        modalcontentheader: "Kilo Kaybı Nedir?",
        modalcontenttext: "Kilo kaybı, genel vücut ağırlığınızdaki kas, su ve yağ kayıplarından kaynaklanan azalmayı ifade eder. Bununla birlikte, yağdan mı yoksa kastan mı kilo verdiğinizi bilmek zor olabilir.",
        modalcontentheader2: "Yağdan Kilo Verdiğimizi Nasıl Anlarız?",
        modalcontenttext2 : "Bir tartı kullanarak kilo verme durumunuzu takip etmek yaygın bir uygulamadır. Tartı kullanımı kilonuzu öğrenmek için yardımcı olabilirken çoğu tartı, yağ kaybı ile kas kaybı arasında ayrım yapmaz. Bu nedenle, yalnızca tartı ile kilonuzu takip etmek, yağ mı yoksa kas mı kaybettiğinizi ve hangi miktarlarda kaybettiğinizi belirlemenin güvenilir bir yolu değildir. Vücut yağı da ölçen tartı, sahip olduğunuz yağ ve kas yüzdesini ölçerek vücut kompozisyonunuzun daha doğru bir resmini sağlayabilir. Vücut yağ yüzdenizi tahmin etmek için deri kıvrım kaliperleri de kullanabilirsiniz, ancak bu, doğruluğu sağlamak için pratik gerektirir."
    },
    {
        header: " GÜZEL BİR UYKU UYUYAMIYOR MUSUNUZ ? ",
        content: "Sizinle “MELATONİN” ile ilgili bir kaç paylaşımda bulunmak istiyorum. Uyku problemi yaşam kalitemizi...",
        media: cardimage2,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "GÜZEL BİR UYKU UYUYAMIYOR MUSUNUZ?",

    },
    {
        header: " Şeker Tüketimi ",
        content: "Uzun zamandır şekerin yararları ve zararları tartışılırken; bu bloğumuzda yer verdik",
        media: cardimage3,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "ŞEKER TÜKETIMI",

    },
    {
        header: "Sebze Programı ",
        content: "Sağlıklı beslenme başlı başına ciddi bir iştir. Yağ yakmak ve kas yapmak söz konusu olduğunda daha da karmaşık hale gelir.",
        media: cardimage4,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "SEBZE PROGRAMI",

    },
    {
        header: "ESNEME TERİMİ NEDİR? ",
        content: "Biz bu yazıda, kasları germe tanımıyla bir takım kaynaklardan bir araya getirdiğimiz streching terimini ifade edeceğiz...",
        media: cardimage5,
        date: " 14.02.2022 ",
        button: "DEVAMINI OKU",
        modalheader: "ESNEME TERİMİ NEDİR?",

    },
 
]


const blog = () => {
    return (
        <Box className='blogCardData'>
            <Divider
                sx={{
                    backgroundColor: 'yellow'
                }}
            />
            <Box className='blogheader'>
                <img
                    className='blogimage'
                    src={require('../images/blogPage.png')}
                />
            </Box>
            {/* Card */}
            <center>
            <Grid container
                direction='row'
                className='blogCardData'
                sx={{ justifyContent: { xs: 'center', md: 'normal' } }}
            >
                {blogCardData.map((card) => {
                    return (
                        <BlogCard
                            header={card.header}
                            content={card.content}
                            media={card.media}
                            date={card.date}
                            button={card.button}
                            modalheader={card.modalheader}
                            modalcontentheader={card.modalcontentheader}
                            modalcontenttext={card. modalcontenttext}
                            modalcontentheader2={card.modalcontentheader2}
                            modalcontenttext2={card.modalcontenttext2}
                        />
                    )
                })}
            </Grid>
            </center>
        </Box>
    )
}
export default blog