import { CartItemProps } from "../CartModal";

export type ItemProps = {
  id: string,
  title?: string,
  description?: string,
  image?: string,
  priceUnits?: number,
  priceCurrency?: string,
  priceId?: string,
}

export interface ItemGridProps {
  items: ItemProps[],
  onClickItem: (id: string) => void;
  onAddToCart: (id: string, item: CartItemProps) => void;
};
