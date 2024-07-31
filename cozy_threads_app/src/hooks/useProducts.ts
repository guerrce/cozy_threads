import { useEffect, useState } from "react";
import { fetchCollection } from "../thunk/collection";
import { fetchProduct } from "../thunk/product";
import { StripeProduct } from "../types/api";
import { useAppDispatch, useAppSelector } from "./utils";

export const useProducts = ({
  searchTerm,
  isProductSearch,
}: {
  searchTerm?: string,
  isProductSearch: boolean
}): {
  products: StripeProduct[],
  loading: boolean,
  error: string | null
} => {
  const dispatch = useAppDispatch();
  const productsState = useAppSelector((state) => state.products);
  const [currentProductsState, setProductsState ] = useState(productsState);


  useEffect(() => {
    if (isProductSearch){
      dispatch(fetchProduct(searchTerm || ''));
    } else {
      dispatch(fetchCollection({
        collectionName: searchTerm || '',
        limit: 10,
      }));
    }
    
  }, [dispatch, searchTerm, isProductSearch]);


  useEffect(() => {
    setProductsState(productsState);
  }, [productsState]);

  return {
    products: currentProductsState.products,
    loading: currentProductsState.status === 'loading',
    error: currentProductsState.error,
  }
};