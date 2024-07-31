import { Button, Divider, Drawer, Typography } from '@mui/material';
import React, { FC } from 'react';
import makePriceString from '../../containers/Collection/utils/makePriceString';
import { CartItemData } from '../../context/CartContext';
import CartItem from '../CartItem';
import { CartItemProps, CartModalProps } from './types';

const CartModal: FC<CartModalProps> = ({
  open,
  items,
  onClose,
  onClickCheckout,
  onAddToCart,
  onRemoveFromCart
}) => {
  const cartTotal = items.reduce(
    (acc, item) => (acc + (item.priceUnits * item.quantity)),
    0
  );
  const currency = items[0]?.priceCurrency || 'usd';
  const cartTotalString = makePriceString(currency, cartTotal);

  const handleClickAddToCart = (item: CartItemProps) => {
    const itemToAdd: CartItemData = {
      name: item.name,
      priceUnits: item.priceUnits,
      priceCurrency: item.priceCurrency,
      priceId: item.priceId,
      quantity: 1,
    };
    onAddToCart(item.id, itemToAdd);
  }; 

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Typography variant='h5'>Your Cart</Typography>
      <Divider />
      <div>
        {items.map((item, index) => (
          <CartItem
            key={index}
            name={item.name}
            priceString={makePriceString(item.priceCurrency, item.priceUnits)}
            image={item.image}
            quantity={item.quantity}
            onAddToCart={() => {
              handleClickAddToCart(item);
            }}
            onRemoveFromCart={() => {onRemoveFromCart(item.id);}}
          />
        ))}
      </div>
      <Divider />
      <Typography>Total: {cartTotalString}</Typography>
      <Button onClick={onClickCheckout}>Checkout</Button>
    </Drawer>
  )
};

export default CartModal;
