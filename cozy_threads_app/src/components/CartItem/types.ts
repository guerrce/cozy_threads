export interface CartItemProps {
  key: number,
  name: string,
  image?: string,
  quantity: number,
  priceString: string,
  onAddToCart: () => void;
  onRemoveFromCart: () => void;
};
