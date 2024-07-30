import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCollection } from '../thunk/collection';
import { fetchProduct } from '../thunk/product';
import { StripeProduct } from '../types/api';

export type ProductsAction = {
  products: StripeProduct[],
  nextPage: string | null,
};

export type ProductsState = {
  products: StripeProduct[],
  nextPage: string | null,
  status: string,
  error: string | null,
}

const initialState: ProductsState = {
  products: [],
  nextPage: null,
  status: "idle",
  error: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    thing: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      const { data: products, nextPage } = action.payload;
      state.status = "success";
      state.products = products;
      state.nextPage = nextPage;
      state.error = null;
    });
    builder.addCase(fetchCollection.rejected, (state, action) => {
      state.status = "failure";
      state.error = action.payload?.message || 'No error message';
    });

    builder.addCase(fetchProduct.pending, (state) => {
      console.log('p');
      state.status = 'loading';
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      console.log('f');
      const product = action.payload;
      state.status= "success";
      state.products= [product];
      state.nextPage= null;
      state.error= null;
      console.log(action.payload);
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      console.log('e');
      state.status = "failure";
      state.error = action.payload?.message || 'No error message';
    });
  }
});

export default productsSlice.reducer;
