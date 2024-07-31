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
  const mediaStyles = {
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
      marginTop:'30'
    }
};
  console.log(image);
  return (
    <Grid
     item
    >
      <Card>
        <CardMedia
          onClick={onClick}
          style={mediaStyles.media}
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
