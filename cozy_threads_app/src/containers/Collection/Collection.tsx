import { Grid, Pagination } from '@mui/material';
import React, { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext, CartContextType } from '../../context/CartContext';
import ItemGrid, { ItemProps } from '../../components/ItemGrid';
import getCollectionsTitle from './utils/getCollectionsTitle';

const mockCollectionsData: ItemProps[] = [
  {
    id: '1',
    title: 'Item 1',
    description: 'This is an item',
    image: undefined,
    price: '$1.99',
  },
  {
    id: '2',
    title: 'Item 2',
    description: 'This is also an item',
    image: undefined,
    price: '$3.99',
  },
  {
    id: '3',
    title: 'Item 3',
    description: 'Same here',
    image: undefined,
    price: '$5.99',
  }
];

const Collection: FC<{}> = ({}) => {
  const navigate = useNavigate();
  const {
    addProduct,
  } = useContext(CartContext) as CartContextType;
  const { collection: collectionName } = useParams();

  const handleClickItem = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (id: string) => {
    addProduct(id, 1);
  };

  const collectionTitle = getCollectionsTitle(collectionName || '');

  return (
    <div>
      <div>
        {collectionTitle}
      </div>
      <ItemGrid
        items={mockCollectionsData}
        onClickItem={handleClickItem}
        onAddToCart={handleAddToCart}
      />
      <Pagination />
    </div>
  )
};

export default Collection;
