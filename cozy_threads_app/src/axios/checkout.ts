import axios from "./axios";
import { CheckoutResponse, LineItems } from "../types/api";


export const postCheckout = async ({
  lineItems
}: {
  lineItems: LineItems,
}): Promise<CheckoutResponse> => {
  try {
    const response = await axios.post(`/checkout`, {
      lineItems
    });
    if (response.status !== 200){
      throw new Error('error searching notes');
    }
    return response.data;
  } catch (error: any){
    throw new Error(error.message);
  }
};
