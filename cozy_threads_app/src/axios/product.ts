import axios from "./axios";
import { ProductResponse } from "../types/api";

export const getProduct = async ({
  productId
}: {
  productId: string,
}): Promise<ProductResponse> => {
  try {
    const response = await axios.get(`product/${productId}`);
    console.log('get p');
    if (response.status !== 200){
      console.log('na');
      throw new Error('error searching notes');
    }
    console.log('yea');
    return response.data;
  } catch (error: any){
    throw new Error(error.message);
  }
};
