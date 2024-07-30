import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProduct } from "../axios/product";
import { StripeProduct } from "../types/api";
import { ThunkError } from "../types/thunk";

export const fetchProduct = createAsyncThunk<
  StripeProduct,
  string,
  ThunkError
>(
  'product',
  async (productId, thunkApi) => {
    try {
      const response = await getProduct({productId});
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch product." 
      });
    }
  }
);
