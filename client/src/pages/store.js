import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia, Grid, Container } from '@mui/material';
import StoreSearchBar from '../components/common/StoreSearchBar';
import StoreCard from '../components/common/StoreCard';


const storeData = [
  {
    id: "1",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "2",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "3",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "4",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "5",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "6",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "7",
    name: "GLUTAPURE 500GR",
    description: "AMINO ASIT",
    price: "299.90"
  },
  {
    id: "8",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "9",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "10",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "11",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "12",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "13",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "14",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "15",
    name: "GLUTAPURE 500GR",
    description: "AMINO ASIT",
    price: "299.90"
  },
  {
    id: "16",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "17",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "18",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "19",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "20",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "21",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "22",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "23",
    name: "GLUTAPURE 500GR",
    description: "AMINO ASIT",
    price: "299.90"
  },
  {
    id: "24",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "25",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "26",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "27",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "28",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "29",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
  {
    id: "30",
    name: "YOU CAN GO HOME NOW TSHIRT",
    description: "GRI MELANJ",
    price: "129.90"
  },
  {
    id: "31",
    name: "GLUTAPURE 500GR",
    description: "AMINO ASIT",
    price: "299.90"
  },
  {
    id: "32",
    name: "Paslanmaz Çelik Shaker",
    description: "739ml",
    price: "119.90"
  },
]

const settings = {
  arrows: false,
  dots: true,
  infinite: false,
  rows: 3,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 500,
      settings: { rows:16,slidesToShow: 1, slidesToScroll:1 }
    },
    {
      breakpoint: 763,
      settings: { slidesToShow: 1, slidesToScroll:1 }
    },
    {
      breakpoint: 1000,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 1229,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 1430,
      settings: { slidesToShow: 3 }
    },
  ]
}


const Store = () => {
  return (
    <>
      <CardMedia
        className="store-start-media"
      />
      <StoreSearchBar />


      <Container maxWidth="100%" className="store-card-container"  >


        
          <center>
            <Slider {...settings}  >
              {storeData.map((store) => {
                return (
                  <StoreCard
                    id={store.id}
                    name={store.name}
                    description={store.description}
                    price={store.price}
                  />
  
                )
              })}
            </Slider>
          </center>
        


      </Container>


    </>
  )
}

export default Store;