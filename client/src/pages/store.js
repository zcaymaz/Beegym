import React from 'react';
import { CardMedia } from '@mui/material';
import StoreSearchBar from '../components/common/StoreSearchBar';


const Store = () => {
  return (
    <>
        <CardMedia
            className="store-start-media"
        />
        <StoreSearchBar/>
    </>
  )
}

export default Store;