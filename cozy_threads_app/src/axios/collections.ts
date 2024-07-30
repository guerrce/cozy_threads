import axios from "./axios";
import { CollectionResponse, CollectionsRequest } from "../types/api";

export const getCollection = async ({
  collectionName,
  limit,
  page,
}: CollectionsRequest): Promise<CollectionResponse> => {
  try {
    const response = await axios.get(`/collection/${collectionName}`, {
      params: {
        limit,
        page
      }
    });
    if (response.status !== 200){
      throw new Error('error searching notes');
    }
    return response.data;
  } catch (error: any){
    throw new Error(error.message);
  }
};
