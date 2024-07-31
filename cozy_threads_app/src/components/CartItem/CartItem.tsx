import React, { FC,  } from 'react';
import { Button } from '@mui/material';
import { CartItemProps } from './types';

const CartItem: FC<CartItemProps> = ({
  name,
  image,
  quantity,
  priceString,
  onAddToCart,
  onRemoveFromCart
}) => {
  const imageStyle = {
    height: '125px',
    paddingTop: '10px',
    paddingLeft: '15px',
  };

  const containerStlye = {
    justifyContent: 'center',
  };

  return (
    <div style={containerStlye}>
      <img src={image} alt={'-'} style={imageStyle}/>
      <div>{name}</div>
      <span>
        <Button
          size='small'
          onClick={onRemoveFromCart}
        >
          -
        </Button>
        <span>
        {priceString} x {quantity}
        </span>
        <Button
          size='small'
          onClick={onAddToCart}
        >
          +
        </Button>
      </span>
    </div>
  )
};

export default CartItem;
