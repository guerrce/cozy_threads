import { Card, CardContent, CardMedia } from '@mui/material';
import React, { FC } from 'react';
import { ItemTileProps } from './types';

const ItemTile: FC<ItemTileProps> = ({
  title,
  image,
  price,
  onClick,
}) => {
  return (
    <Card onClick={onClick}>
      <CardMedia
        image={image}
      />
      <CardContent>
        <div>{title}</div>
        <div>{price}</div>
      </CardContent>
    </Card>
  )
};

export default ItemTile;
