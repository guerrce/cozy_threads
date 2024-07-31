import { Button, Card, CardActions, CardContent, CardMedia, Grid } from '@mui/material';
import React, { FC } from 'react';
import makePriceString from '../../containers/Collection/utils/makePriceString';
import { ItemTileProps } from './types';

const ItemTile: FC<ItemTileProps> = ({
  title,
  image,
  priceUnits,
  priceCurrency,
  onClick,
  onAddToCart,
}) => {
  const priceString = makePriceString(priceCurrency || 'usd', priceUnits || 0);

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
          <div>{priceString}</div>
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
