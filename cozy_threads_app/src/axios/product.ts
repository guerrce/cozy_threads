import axios from "./axios";
import { ProductResponse } from "../types/api";

export const getProduct = async ({
  productId
}: {
  productId: string,
}): Promise<ProductResponse> => {
  try {
    const response = await axios.get(`product/${productId}`);
    if (response.status !== 200){
      throw new Error('error searching notes');
    }
    return response.data;
  } catch (error: any){
    throw new Error(error.message);
  }
};
