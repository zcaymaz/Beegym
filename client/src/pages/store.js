import React from 'react';
import { CardMedia } from '@mui/material';
import StoreSearchBar from '../components/common/StoreSearchBar';
import StoreCard from '../components/common/StoreCard';
import StoreData from "../components/common/StoreData";

const Store = () => {
  return (
    <>
        <CardMedia
            className="store-start-media"
        />
        <StoreSearchBar/>
        <StoreCard
          name="PASLANMAZ ÇELİK SHAKER"
          description="739ml"
          price="119.90"
        />
    </>
  )
}

export default Store;