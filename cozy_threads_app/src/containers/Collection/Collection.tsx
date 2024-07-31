import { CircularProgress, Container, Typography } from '@mui/material';
import React, { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext, CartContextType } from '../../context/CartContext';
import ItemGrid, { ItemProps } from '../../components/ItemGrid';
import getCollectionsTitle from './utils/getCollectionsTitle';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';

const Collection: FC<{}> = ({}) => {
  const navigate = useNavigate();
  const {
    handleAddToCart,
  } = useCart(useContext(CartContext) as CartContextType)

  const { collection: collectionName } = useParams();

  const {
    products,
    loading,
    error
  } = useProducts({
    searchTerm: collectionName,
    isProductSearch: false,
  });

  const handleClickItem = (id: string) => {
    navigate(`/product/${id}`);
  };

  if (loading){
    return (
      <div>
        <CircularProgress />
      </div>
      
    );
  }

  if (error){
    return (
      <div>
        There was an error: {error}
      </div>
    )
  }

  if (!products.length){
    return (
      <div>
        No products found
      </div>
    )
  }

  const items: ItemProps[] = products.map((product) => ({
    id: product.id,
    title: product.name,
    description: product.description || '',
    image: product.images[0],
    priceUnits: product.priceUnits || 0,
    priceCurrency: product.priceCurrency || 'usd',
    priceId: product.priceId || '',
  }))

  const collectionTitle = getCollectionsTitle(collectionName || '');
  return (
    <Container>
      <Typography variant='h4'>
        {collectionTitle}
      </Typography>

      <ItemGrid
        items={items}
        onClickItem={handleClickItem}
        onAddToCart={handleAddToCart}
      />
    </Container>
  )
};

export default Collection;
