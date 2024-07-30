import { Button, CircularProgress, Typography } from '@mui/material';
import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { useAppDispatch, useAppSelector } from '../../hooks/utils';
import { fetchProduct } from '../../thunk/product';

const ProductPage: FC<{}> = ({}) => {
  const { productId } = useParams();
  const {
    products,
    loading,
    error
  } = useProducts({
    searchTerm: productId,
    isProductSearch: true,
  });

  if (loading){
    return (
      <div>
        <CircularProgress />
      </div>
      
    );
  }

  if (error){
    return (
      <div>
        There was an error: {error}
      </div>
    )
  }

  if (!products.length){
    return (
      <div>
        No products found
      </div>
    )
  }

  const {
    name,
    priceId,
    images,
    description,
  } = products[0];
  const image = images[0];

  const handleAddToCart = (): void => {};



  return (
    <div>
      <Typography>{name}</Typography>
      <div>Product Image</div>
      <Typography>{description}</Typography>
      <Button
        onClick={handleAddToCart}
      >Add to cart</Button>
    </div>
  )
};

export default ProductPage;
