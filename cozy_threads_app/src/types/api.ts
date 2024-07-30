export type StripeProduct = {
  id: string,
  name: string,
  active: boolean,
  priceId: string | null,
  description: string | null,
  collection: string | null,
  images: string[],
}

export type CollectionsRequest = {
  collectionName: string,
  limit: number,
  page?: string,
};

export type CollectionResponse = {
  data: StripeProduct[],
  hasMore: boolean,
  nextPage: string | null
};

export type ProductResponse = StripeProduct;

export type CheckoutResponse = {
  redirectUrl: 'string'
};

export type LineItem = {
  priceId: string,
  quantity: number,
};

export type LineItems = LineItem[];
