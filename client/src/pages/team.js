import React from 'react'
import Team from '../components/common/TeamPageCard';

const team = () => {
    return (
        <>
        <Team
            name="enes"
            surname="uludoğan"
            job="FİTNESS EĞİTMENİ"
            text="Öncelikle herkese merhaba, bildiğiniz üzere ben Fitness antrenörü Enes Uludoğan,
                  A.İ.B.Ü Spor Bilimleri mezunuyum, spor geçmişim 6 yaşında futbolla başladı.Devamında tekvandoya geçmemle profesyonel kimliğim ve olaylara bakış açım şekillenmeye başladı. Sayısız maça çıktım. Bölgesel derecelerim ile kariyerim güzel giderken sakatlığım tekvando hayatını yerini fitness a bıraktı. Tekvandonun aşkını fitness da yakalamak istedim."
             text2="2017 de tekvando antrenörlüğü ile antrenörlük kariyerime güzel bir başlangıç yaptım.
                  Beraberinde fitness eğitimleri, seminerler, kurslar peşinde koşarak kendimi bu alan da da geliştirmeye başladım. Aynı zaman da da lisans sürecinde bir çok spor temelli konuda ders aldım.2 yıl spor yöneticisi olarak fitness salonunda çalıştım. 2 yıldır da kişisel antrenörlük yapıp uzaktan eğitim veriyorum.
                  2018 den bu yana insanların kendilerini, hayatlarını değiştirmesine yardımcı oluyorum."     
            image={require('../images/EnesUludogan.png')}
        />
        <Team 
            name="şule"
            surname="ÇETİN"
            job="DİYETİSYEN"
            text="Merhabalar ben diyetisyen Şule Çetin. Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünü 2018 yılında şeref öğrencisi olarak tamamladım."
            text2="Hemen sonrasında özel bir klinikte beslenme danışanmanlığı ve bölgesel zayıflama alanında hizmet vermeye başladım. 
                  Bu süreç boyunca yurtiçi ve yurtdışı yüz yüze görüşme imkanı sağlayamadığımız danışanlarıma online beslenme danışmanlığı vermeye devam ettim."
            text3="2020 yılında sporcu beslenmesi üzerine danışmanlık hizmetini çalışma alanlarıma ekleyerek diyetisyenlik mesleğimi devam ettirmekteyim."
            image={require('../images/SuleCetin.png')}
        />
        <Team 
            name="şule"
            surname="SOFTWARE"
            job="DİYETİSYEN"
            text="Merhabalar ben diyetisyen Şule Çetin. Hacettepe Üniversitesi Beslenme ve Diyetetik bölümünü 2018 yılında şeref öğrencisi olarak tamamladım."
            text2="Hemen sonrasında özel bir klinikte beslenme danışanmanlığı ve bölgesel zayıflama alanında hizmet vermeye başladım. 
                  Bu süreç boyunca yurtiçi ve yurtdışı yüz yüze görüşme imkanı sağlayamadığımız danışanlarıma online beslenme danışmanlığı vermeye devam ettim."
            text3="2020 yılında sporcu beslenmesi üzerine danışmanlık hizmetini çalışma alanlarıma ekleyerek diyetisyenlik mesleğimi devam ettirmekteyim."
            image={require('../images/SuleCetin.png')}
        />
        </>
    )
}

export default team