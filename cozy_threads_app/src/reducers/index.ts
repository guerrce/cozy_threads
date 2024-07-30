import { combineReducers } from "@reduxjs/toolkit";
import productsReducer from "./products";

const allReducers = combineReducers({
  products: productsReducer,
});

export default allReducers;
