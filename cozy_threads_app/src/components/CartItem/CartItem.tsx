import { ListItem } from '@mui/material';
import React, { FC, useContext } from 'react';
import { CartContext, CartContextType } from '../../context/CartContext';
import { CartItemProps } from './types';

const CartItem: FC<CartItemProps> = ({
  id,
  name,
  image,
  quantity,
  price,
}) => {
  const {
    addProduct,
    removeProduct,
  } = useContext(CartContext) as CartContextType;

  const onIncrease = () => {
    addProduct(id, 1);
  };

  const onDecrease = () => {
    removeProduct(id);
  };


  return (
    <div>
      <image></image>
      <div>{name}</div>
      <div>
        {price} x {quantity}
      </div>
    </div>
  )
};

export default CartItem;
