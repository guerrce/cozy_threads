import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import React, { FC } from 'react';
import { ItemTileProps } from './types';

const ItemTile: FC<ItemTileProps> = ({
  title,
  image,
  price,
  onClick,
  onAddToCart,
}) => {
  return (
    <Grid
     item
    >
      <Card onClick={onClick}>
        <CardMedia
          image={image}
        />
        <CardContent>
          <div>{title}</div>
          <div>{price}</div>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={onAddToCart}
          >
            Add to cart
          </Button>
      </CardActions>
      </Card>
    </Grid>
  )
};

export default ItemTile;
