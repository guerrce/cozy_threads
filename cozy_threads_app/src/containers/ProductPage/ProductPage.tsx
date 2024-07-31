import React, { FC, useContext } from 'react';
import { Button, CircularProgress, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';

import makePriceString from '../Collection/utils/makePriceString';
import { useCart } from '../../hooks/useCart';
import { CartContext, CartContextType, CartItemData } from '../../context/CartContext';

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

  if (error || !productId){
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
    priceCurrency,
    priceUnits,
    images,
    description,
    priceId,
  } = products[0];
  const image = images[0];
  const price_string = makePriceString(priceCurrency || '', priceUnits || 0)

  const { handleAddToCart } = useCart(useContext(CartContext) as CartContextType);
  const handleClickAddToCart = () => {
    const productToAdd: CartItemData = {
      name,
      priceUnits: priceUnits || 0,
      priceCurrency: priceCurrency || "usd",
      priceId: priceId || '',
      quantity: 1,
    };
    handleAddToCart(productId, productToAdd);
  };

  return (
    <div>
      <div>Product Image</div>
      <div>
        <Typography>{name}</Typography>
        <Typography>{price_string}</Typography>
      </div>
      <Typography>{description}</Typography>
      <Button
        onClick={handleClickAddToCart}
      >Add to cart</Button>
    </div>
  )
};

export default ProductPage;
