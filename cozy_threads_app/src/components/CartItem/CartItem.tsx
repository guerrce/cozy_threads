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
  return (
    <div>
      <image></image>
      <div>{name}</div>
      <span>
        <Button
          size='small'
          onClick={onAddToCart}
        >
          -
        </Button>
        <span>
        {priceString} x {quantity}
        </span>
        <Button
          size='small'
          onClick={onRemoveFromCart}
        >
          +
        </Button>
      </span>
    </div>
  )
};

export default CartItem;
