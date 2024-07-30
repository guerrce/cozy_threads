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
  loading: boolean,
  error: string | null,
}

const initialState: ProductsState = {
  products: [],
  nextPage: null,
  loading: false,
  error: null
};

const productsReducer = (
  state=initialState,
  action: PayloadAction<ProductsAction>
) => {
  switch (action.type) {
    case 'FETCH_DATA_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        products: action.payload.products,
        nextPage: action.payload.nextPage,
        isLoading: false
      };
    case 'FETCH_DATA_FAILURE':
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};



const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    thing: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCollection.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCollection.fulfilled, (state, action) => {
      const { data: products, nextPage } = action.payload;
      state = {
        loading: false,
        products,
        nextPage,
        error: null,
      }
    });
    builder.addCase(fetchCollection.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || 'No error message';
    });

    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      const product = action.payload;
      state = {
        loading: false,
        products: [product],
        nextPage: null,
        error: null,
      }
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || 'No error message';
    });
  }
});

export default productsSlice.reducer;
