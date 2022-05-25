import React, { useState } from 'react';
import { CardMedia, Grid, Container, Typography } from '@mui/material';
import StoreSearchBar from '../components/common/StoreSearchBar';
import StoreCard from '../components/common/StoreCard';
import { Button } from '@mui/material';



const storeData = [
  {
    id: "1",
    name: "Paslanmaz Çelik Shakers",
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
    name: "YOU CAN GO HOME NOW TSHIRT asdasdasdasdasdwekbuweubvyuvhvrhuvunveıuevwuweıucnu",
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



const Store = () => {

  const [noOfElement, setnoOfElement] = useState(10);

  const loadMore = () => {
    setnoOfElement(noOfElement + 5);
  }

  const slice = storeData.slice(0, noOfElement);

  return (
    <>
      <CardMedia
        className="store-start-media"
      />
      <StoreSearchBar />


      <Container maxWidth="100%">
        <Grid container className="store-card-container" >
          {slice.map((store) => {
            return (
              <StoreCard
                id={store.id}
                name={store.name}
                description={store.description}
                price={store.price}
              />
            )
          })}
        </Grid>
      </Container>

      <center>
        <Button className="store-load-more-btn" variant="contained" onClick={() => loadMore()} >
          <Typography>Daha Fazla Yükle</Typography>
        </Button>
      </center>
    </>
  )
}

export default Store;