import { Button, Divider, Drawer, List, Typography } from '@mui/material';
import React, { FC } from 'react';
import CartItem from '../CartItem';
import { CartModalProps } from './types';

const CartModal: FC<CartModalProps> = ({
  open,
  items,
  onClose,
  onClickCheckout
}) => {
  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Typography>Your Cart</Typography>
      <Divider />
      <div>
        {items.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </div>
      <Button onClick={onClickCheckout}>Checkout</Button>
    </Drawer>
  )
};

export default CartModal;
