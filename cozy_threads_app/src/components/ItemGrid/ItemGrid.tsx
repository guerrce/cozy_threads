import { Grid } from '@mui/material';
import React, { FC } from 'react';
import { CartItemProps } from '../CartModal';
import ItemTile from '../ItemTile';
import { ItemGridProps } from './types';

const ItemGrid: FC<ItemGridProps> = ({
  items,
  onClickItem,
  onAddToCart,
}) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
    >
      {items.map((item => (
        <ItemTile
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          priceUnits={item.priceUnits}
          priceCurrency={item.priceCurrency}
          onClick={() => {
            onClickItem(item.id);
          }}
          onAddToCart={() => {
            const itemToAdd: CartItemProps = {
              id: item.id,
              name: item.title || "",
              priceCurrency: item.priceCurrency || "usd",
              priceUnits: item.priceUnits || 0,
              priceId: item.priceId || "",
              image: item.image,
              quantity: 1,
            };
            onAddToCart(item.id, itemToAdd);
          }}
        />
      )))}
    </Grid>
  )
};

export default ItemGrid;
