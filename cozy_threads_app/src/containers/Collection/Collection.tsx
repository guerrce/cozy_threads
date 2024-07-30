import { CircularProgress, Grid, Pagination } from '@mui/material';
import React, { FC, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext, CartContextType } from '../../context/CartContext';
import ItemGrid, { ItemProps } from '../../components/ItemGrid';
import getCollectionsTitle from './utils/getCollectionsTitle';
import { useProducts } from '../../hooks/useProducts';
import makePriceString from './utils/makePriceString';

const Collection: FC<{}> = ({}) => {
  const navigate = useNavigate();
  const {
    addProduct,
  } = useContext(CartContext) as CartContextType;

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

  const handleAddToCart = (id: string) => {
    addProduct(id, 1);
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
    price: makePriceString(product.priceCurrency || '', product.priceUnits || 0),
  }))

  const collectionTitle = getCollectionsTitle(collectionName || '');
  return (
    <div>
      <div>
        {collectionTitle}
      </div>
      <ItemGrid
        items={items}
        onClickItem={handleClickItem}
        onAddToCart={handleAddToCart}
      />
      <Pagination />
    </div>
  )
};

export default Collection;
