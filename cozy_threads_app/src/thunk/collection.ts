import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCollection } from "../axios/collections";
import { CollectionResponse, CollectionsRequest } from "../types/api";
import { ThunkError } from "../types/thunk";

export const fetchCollection = createAsyncThunk<
  CollectionResponse,
  CollectionsRequest,
  ThunkError
>(
  "collection", 
  async (params, thunkApi) => {
    try {
      const response = await getCollection(params);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue({ 
        message: "Failed to fetch todos." 
      });
    }
  }
);
