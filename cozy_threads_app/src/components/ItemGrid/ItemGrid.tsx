import { Grid } from '@mui/material';
import React, { FC } from 'react';
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
    >
      {items.map((item => (
        <ItemTile
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
          onClick={() => {
            onClickItem(item.id);
          }}
          onAddToCart={() => {
            onAddToCart(item.id);
          }}
        />
      )))}
    </Grid>
  )
};

export default ItemGrid;
